import { Handler } from '@netlify/functions'
import fetch, { Response } from 'node-fetch'

const SEMBARK_API_BASE_URL = process.env.SEMBARK_API_BASE_URL
const SEMBARK_API_ACCESS_TOKEN = process.env.SEMBARK_API_ACCESS_TOKEN
const GOOGLE_RECAPTCHA_SECRET = process.env.GOOGLE_RECAPTCHA_SECRET
const APP_ENV = process.env.APP_ENV || 'production'

export const handler: Handler = async (event, context) => {
  if (event.httpMethod.toLowerCase() !== 'post') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: 'Method not allowed',
      }),
      headers: {
        allow: 'post',
      },
    }
  }
  if (
    !SEMBARK_API_BASE_URL ||
    !SEMBARK_API_ACCESS_TOKEN ||
    !GOOGLE_RECAPTCHA_SECRET
  ) {
    const errors: Record<string, Array<string>> = {}
    if (!SEMBARK_API_BASE_URL) {
      errors['SEMBARK_API_BASE_URL'] = [
        'Missing `SEMBARK_API_BASE_URL environment variable',
      ]
    }
    if (!SEMBARK_API_ACCESS_TOKEN) {
      errors['SEMBARK_API_ACCESS_TOKEN'] = [
        'Missing `SEMBARK_API_ACCESS_TOKEN` environment variable',
      ]
    }
    if (!GOOGLE_RECAPTCHA_SECRET) {
      errors['GOOGLE_RECAPTCHA_SECRET'] = [
        'Missing `GOOGLE_RECAPTCHA_SECRET` environment variable',
      ]
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Missing environment variables',
        errors: errors,
      }),
    }
  }
  let body: Record<string, string | number> = {}
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: 'Malformed request body',
      }),
    }
  }
  const {
    name,
    phone_number,
    email,
    destination,
    start_date,
    no_of_days,
    no_of_adults,
    no_of_children,
    hotel_preference,
    comments,
    trip_source,
    grecaptcha_token,
  } = body

  let failedCaptchaResponse = await ensureNoRobots(grecaptcha_token)
  // check for non-zero status code
  if (failedCaptchaResponse !== 0) {
    // failed
    return failedCaptchaResponse
  }

  const data = {
    name,
    phone_number,
    email,
    destination,
    start_date,
    no_of_days,
    no_of_adults,
    no_of_children,
    hotel_preference,
    comments,
    trip_source: trip_source || 'Website',
  }

  let json: Record<string, unknown> = {}
  let response: Response

  try {
    response = await fetch(`${SEMBARK_API_BASE_URL}/trip-plan-requests`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        authorization: `Bearer ${SEMBARK_API_ACCESS_TOKEN}`,
      },
    })
    const status_code = response.status
    json = (await response.json()) as typeof json
    if (status_code !== 201) {
      throw json
    }
  } catch (err) {
    return {
      statusCode: err.status_code || err.statusCode || 500,
      body: JSON.stringify(err),
    }
  }

  return {
    statusCode: response.status,
    body: JSON.stringify(json),
  }
}

async function ensureNoRobots(grecaptcha_token: unknown) {
  if (!grecaptcha_token) {
    if (APP_ENV === 'development') {
      return 0 as const
    }
    return {
      statusCode: 422,
      body: JSON.stringify({
        message:
          'Missing captcha verification. Please refresh the page and try again.',
      }),
    }
  }

  let json: Record<string, unknown> = {}
  let response: Response

  try {
    response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: JSON.stringify({
        secret: GOOGLE_RECAPTCHA_SECRET,
        response: String(grecaptcha_token),
      }),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })
    json = (await response.json()) as typeof json
    if (!json.success) {
      throw {
        status_code: 422,
        message: 'Captcha verification failed',
        errors: {
          grecaptcha_token: json['error-codes'] || [],
        },
      }
    }
  } catch (err) {
    return {
      statusCode: err.status_code || err.statusCode || 422,
      body: JSON.stringify(err),
    }
  }
  // all is well here
  return 0 as const
}
