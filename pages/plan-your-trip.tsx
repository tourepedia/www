import { useState, useContext } from 'react'

import { Input, Form, FormState } from '../components/Form'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Grid, Col } from '../components/Grid'
import ThemeContext from '../components/ThemeProvider'
import TakingNotesImage from './../assets/images/undraw_taking_notes.svg'
import destinations from './../assets/destinations'
import Button from './../components/Button'
import appConfig from './../config/app'

const { email, phoneNumber, apiUrl } = appConfig

const initialValues = {
  name: '',
  phone_number: '',
  email: '',
  destination: '',
  start_date: '',
  no_of_days: 5,
  no_of_adults: 4,
  no_of_children: 0,
}

function localDateStringToUTCDateString(dateString: string = '') {
  if (!dateString) return ''
  const date = new Date(dateString)
  const utcDateString = new Date(date.toUTCString()).toISOString()
  return utcDateString.slice(0, 10) + ' ' + utcDateString.slice(11, 19)
}

export function PlanYourTripForm({ onSuccess }: { onSuccess?: () => void }) {
  return (
    <Form
      id="plan_your_trip_form"
      noValidate
      initialValues={initialValues}
      onSubmit={async values => {
        return fetch(`${apiUrl}/trip-plan-requests`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            start_date: localDateStringToUTCDateString(values.start_date),
          }),
        }).then(async resp => {
          if (resp.status === 201) {
            onSuccess && onSuccess()
            return resp.json()
          }
          const error = await resp.json()
          return Promise.reject(error)
        })
      }}
    >
      <Grid>
        <Col>
          <Input
            label="Name *"
            type="text"
            name="name"
            placeholder="Anand Shah"
            minLength={20}
            required
          />
        </Col>
        <Col>
          <Input
            label="Contact Number *"
            type="string"
            name="phone_number"
            placeholder="9559752299"
            minLength={10}
            maxLength={15}
            required
          />
        </Col>
        <Col>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="use@domain.com"
          />
        </Col>
        <Col>
          <Input
            label="Destination"
            type="text"
            name="destination"
            placeholder="Sikkim"
          />
        </Col>
        <Col>
          <Input
            label="Date (approx.)"
            type="date"
            name="start_date"
            placeholder="dd/mm/yyy"
          />
        </Col>
        <Col>
          <Input
            label="Number of days"
            type="number"
            name="no_of_days"
            placeholder="5"
            min={1}
            max={1000}
          />
        </Col>
      </Grid>
      <Grid>
        <Col>
          <Input
            label="No. of Adults"
            type="number"
            name="no_of_adults"
            placeholder="4"
            min={1}
            max={1000}
          />
        </Col>
        <Col>
          <Input
            label="No. of Children"
            type="number"
            name="no_of_children"
            placeholder="1"
            min={0}
            max={1000}
          />
        </Col>
        <Col></Col>
      </Grid>
      <FormState>
        {({ isSubmitting }) => (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting... Please wait.' : 'Submit Query'}
          </Button>
        )}
      </FormState>
      <footer style={{ marginTop: '30px', fontWeight: 400 }}>
        Or send us an email at{' '}
        <a href={`mailto:${email}`} style={{ color: '#B94B24' }}>
          {email}
        </a>{' '}
        or call us on{' '}
        <a href={`tel:${phoneNumber}`} style={{ color: '#B94B24' }}>
          {phoneNumber}
        </a>{' '}
        regarding your query.
      </footer>
    </Form>
  )
}

export default function PlanYourTrip() {
  const [planned, changePlanned] = useState<boolean>(false)
  const theme = useContext(ThemeContext)
  return (
    <Layout>
      <Seo
        title="Tourepedia - Plan Your Trip"
        description={`Plan your trip for ${destinations
          .map(d => d.title)
          .join(', ')} with Tourepedia and get fully personalized plans.`}
      />
      <style jsx>{`
        h2 {
          font-size: 2.25rem;
          margin: 20px 0px;
        }
        figure {
          min-width: 150px;
          width: 70%;
          max-width: 250px;
          margin: 30px auto;
        }
        section {
          padding: 7vh 0px;
        }
      `}</style>
      <section>
        <Container>
          {!planned ? (
            <div>
              <header>
                <h2>Plan Your Trip</h2>
                <p>
                  Please provide contact details along with your approximate
                  trip details. You can modify these details over phone call or
                  over email when contacted. No prior commitment and no
                  spamming. No charges for trip plan. Travel with us only if you
                  like.
                </p>
              </header>
              <div style={{ margin: '40px auto' }}>
                <PlanYourTripForm onSuccess={() => changePlanned(true)} />
              </div>
            </div>
          ) : (
            <div style={{ margin: '6vh 0 15vh', textAlign: 'center' }}>
              <figure>
                <TakingNotesImage />
              </figure>
              <div style={{ marginBottom: '30px', overflow: 'hidden' }}>
                <h2
                  style={{
                    marginBottom: '20px',
                    color: theme.primary,
                  }}
                >
                  Thank you for sharing your details.
                </h2>
                <p style={{ fontSize: '1.25rem' }}>
                  Our sales executive will shortly contact regarding your trip.
                  We will put our best efforts to create a unique experience for
                  you on this trip.
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  )
}
