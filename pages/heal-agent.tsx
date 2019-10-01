import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container } from '../components/Grid'

function HeaderSection() {
  return (
    <Container>
      <style jsx>{`
        .main-header-container {
          display: flex;
          padding: 80px 0;
          text-align: center;
        }
        h2 {
          font-size: 2.25rem;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        h3 {
          font-weight: 600;
          font-size: 1.5rem;
        }
        p {
          margin-top: 10px;
          font-weight: 400;
        }
        .comming-soon {
          margin: 40px auto;
          font-size: 1.5rem;
          color: gray;
          font-style: italic;
          text-align: center;
        }
      `}</style>
      <header className="main-header-container">
        <div style={{ flex: 1 }}>
          <section>
            <h2>
              All Travel Agency Needs <br />
              One Solution - Agent Healer
            </h2>
            <h3>
              Manage your sales, operations, accounting and finances with ease
              and in one place.
            </h3>
          </section>
        </div>
      </header>
      <section style={{ marginTop: '40px', marginBottom: '60px' }}>
        <p className="comming-soon">Comming Soon</p>
      </section>
    </Container>
  )
}

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Heal Agent - An All-in-one Travel Agency Management Software"
        description="Manage your sales, operations, finances and accounting with ease and in one place"
      />
      <main>
        <HeaderSection />
      </main>
    </Layout>
  )
}

export const config = {
  amp: 'hybrid',
}
