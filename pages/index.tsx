import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container } from '../components/Grid'
import destinations from './../assets/destinations'
import TripImage from './../assets/images/undraw_trip.svg'
import Button from './../components/Button'
import appConfig from './../config/app'

const { email, phoneNumber } = appConfig

function PlanYourTripLink({ children }: { children?: React.ReactNode }) {
  return (
    <Link href="/plan-your-trip" passHref prefetch>
      <Button as="a">{children || 'Plan your trip'}</Button>
    </Link>
  )
}

function HeaderSection() {
  return (
    <Container>
      <style jsx>{`
        .main-header-container {
          display: flex;
          padding: 80px 0;
        }
        .main-trip-image {
          maxwidth: 400px;
          width: 40%;
          order: 2;
          margin: 0 auto;
        }
        @media (max-width: 500px) {
          .main-header-container {
            display: block;
            padding: 40px 0;
          }
          .main-trip-image {
            width: 70%;
            margin-bottom: 40px;
          }
        }
        h2 {
          font-size: 2.25rem;
          margin-bottom: 10px;
        }
        h3 {
          font-weight: 600;
          font-size: 1.5rem;
        }
        p {
          margin-top: 10px;
          font-weight: 400;
        }
      `}</style>
      <header className="main-header-container">
        <section className="main-trip-image">
          <TripImage />
        </section>
        <div style={{ flex: 1 }}>
          <section>
            <h2>
              Pack your Bags and <br />
              Escape
            </h2>
            <h3>You decide. We make it Happen</h3>
          </section>
          <section style={{ marginTop: '40px' }}>
            <PlanYourTripLink />
            <p>
              Share your trip details with us and we will contact you with a
              trip plan
            </p>
          </section>
        </div>
      </header>
    </Container>
  )
}

function SectionDestinations() {
  return (
    <section className="section-destinations">
      <style jsx>{`
        .section-destinations {
          background: #effaff;
          padding: 60px 0px;
        }
        .destination-list-item {
          display: inline-block;
          width: 50%;
          verticalalign: top;
          padding: 30px 15px;
        }
        @media (max-width: 767px) {
          .destination-list-item {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
      <Container>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '2.25rem', margin: '0 0 20px 0' }}>
            Destinations
          </h3>
          <p style={{ margin: 0, fontWeight: 400, fontSize: '1.25rem' }}>
            From ocean to desert, from hills to plains, we got all covered with
            start to end customer support.
          </p>
        </header>
        <div>
          <ol>
            {destinations.map(({ title, description, Image }) => (
              <li key={title} className="destination-list-item">
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      width: '100px',
                      marginRight: '20px',
                    }}
                  >
                    <Image />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '1.5rem' }}>
                      {title}
                    </h4>
                    <p>{description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

function PlanYourTripSection() {
  return (
    <section id="plan-your-trip">
      <style jsx>{`
        #plan-your-trip {
          padding: 15vh 0;
          background: #fdedf5;
        }
        h3 {
          font-size: 2.25rem;
          margin-bottom: 20px;
        }
        a {
          color: rgb(185, 75, 36);
        }
      `}</style>
      <Container>
        <header style={{ textAlign: 'center' }}>
          <h3>Plan Your Trip</h3>
          <p>
            Planning to visit somewhere? We are happy to create the best trip
            expericence for you. Share your trip details and we will contact you
            with a trip plan. No prior commitment and no spamming. No charges
            for trip plan. Travel with us only if you like.
          </p>
          <div style={{ padding: '40px 0' }}>
            <PlanYourTripLink>Submit Your Query</PlanYourTripLink>
          </div>
          <footer>
            Or send us an email at <a href={`mailto:${email}`}>{email}</a> or
            call us on <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>{' '}
            regarding your query.
          </footer>
        </header>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Tourepedia - Travel Packages | Hotel Bookings | Transportation | Mice"
        description="Plan your trips to Rajasthan, Gujarat, Kerala, North East and Bhutan with Tourepedia and get fully personalized plan"
      />
      <main>
        <HeaderSection />
        <SectionDestinations />
        <PlanYourTripSection />
      </main>
    </Layout>
  )
}

export const config = {
  amp: 'hybrid',
}
