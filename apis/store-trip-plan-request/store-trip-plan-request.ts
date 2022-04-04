import { Handler } from '@netlify/functions'
// import fetch, { Response } from 'node-fetch'

// const API_BASE_URL = process.env.API_BASE_URL || 'https://api.sembark.com/v1'
// const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN

export const handler: Handler = async (event, context) => {
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
  } = event.queryStringParameters

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
    trip_source: 'Website',
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  }

  // let response: Response
  //
  // try {
  //   response = await fetch(`${API_BASE_URL}/trip-plan-requests`, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       accept: 'application/json',
  //       authorization: `Bearer ${API_ACCESS_TOKEN}`,
  //     },
  //   })
  // } catch (err) {
  //   return {
  //     statusCode: err.statusCode || 500,
  //     body: JSON.stringify(err),
  //   }
  // }
  //
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     data: response,
  //   }),
  // }
}
