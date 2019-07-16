import React, { useContext } from 'react'
import Link from 'next/link'
import { useAmp } from 'next/amp'

import { Container } from './Grid'
import ThemeContext from './ThemeProvider'

export default function Nav() {
  const isAmp = useAmp()
  const theme = useContext(ThemeContext)
  return (
    <nav
      className="top-nav"
      style={{
        borderTop: `solid 6px ${theme.primary}`,
        fontSize: '16px',
        color: 'black',
        fontWeight: 400,
      }}
    >
      <Container>
        <style key="top_nav_styles" jsx>{`
          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
        <div
          className="top-nav-container"
          style={{
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Link href="/" prefetch={false}>
              <a>
                {isAmp ? (
                  <amp-img
                    height="40px"
                    width="40px"
                    src="/static/logo.jpg"
                    alt="Logo"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  />
                ) : (
                  <img
                    src="/static/logo.jpg"
                    alt="Logo"
                    style={{
                      width: 'auto',
                      height: '40px',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  />
                )}
                <h1
                  style={{
                    marginLeft: '10px',
                    fontWeight: 'inherit',
                    fontSize: 'inherit',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                >
                  Tourepedia
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}
