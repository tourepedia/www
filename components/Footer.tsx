import React from 'react'
import Link from 'next/link'

import appConfig from './../config/app'
import { Container } from '../components/Grid'

function Heading({ children }: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h5
      style={{
        fontSize: '1.25rem',
        margin: '10px 0',
      }}
    >
      {children}
    </h5>
  )
}

function A({
  children,
  ...props
}: React.ComponentProps<typeof Link> & { children: React.ReactNode }) {
  return (
    <Link {...props}>
      <a
        style={{
          textDecoration: 'none',
          color: 'inherit',
          margin: '5px 0',
          display: 'inline-block',
        }}
      >
        {children}
      </a>
    </Link>
  )
}

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: '#300C00',
        padding: '1px 0',
        color: 'white',
        fontWeight: 400,
        clear: 'both',
      }}
    >
      <Container>
        <style jsx>{`
          .footer-container {
            display: flex;
            justify-content: space-between;
            padding: 15px 0;
          }
          @media (max-width: 425px) {
            .footer-container {
              display: block;
            }
          }
        `}</style>
        <div className="footer-container">
          <section>
            <Heading>Useful Links</Heading>
            <A href="/heal-agent">Agents</A>
            <br />
            <A href="/terms-and-conditions" prefetch={false}>
              Terms and Conditions
            </A>
            <br />
            <A href="/privacy-policies" prefetch={false}>
              Privacy Policies
            </A>
          </section>
          <section>
            <Heading>Meet Us</Heading>
            <address>
              Tourepedia Holidays, Near Sangram Bhawan, <br />
              Development Area Taxi Stand, Gangtok
              <br />
              Sikkim, India, 737101
              <br />
              {appConfig.phoneNumber}
            </address>
          </section>
        </div>
      </Container>
      <section style={{ borderTop: '2px solid #451100', padding: '15px 0' }}>
        <Container>
          &copy; 2019 Tourepedia. All rights reserved • v{appConfig.version}
        </Container>
      </section>
    </footer>
  )
}
