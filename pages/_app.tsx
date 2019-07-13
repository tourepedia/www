import React from 'react'
import NextApp, { Container } from 'next/app'

import { ThemeProvider } from '../components/ThemeProvider'
import GoogleAnalytics from './../components/GoogleAnalytics'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
        <style key="global" jsx global>{`
          html,
          body {
            font-family: Nunito, sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.7;
          }
          @media (max-width: 767px) {
            html,
            body {
              font-size: 14px;
            }
          }
          body {
            margin: 0;
            padding: 0.1px;
            box-sizing: border-box;
          }
          *,
          :after,
          :before {
            box-sizing: inherit;
          }
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          figure,
          p,
          pre {
            margin: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 700;
            line-height: 1.2;
          }
          ol,
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          img,
          svg,
          video,
          canvas,
          audio,
          iframe,
          embed,
          object {
            display: block;
            vertical-align: middle;
          }
          *,
          *::before,
          *::after {
            border-width: 0;
            border-style: solid;
            border-color: silver;
          }
          svg {
            max-width: 100%;
            height: auto;
          }
          button,
          input {
            background: transparent;
          }
          button,
          input,
          optgroup,
          select,
          textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }
          [disabled] {
            background: whitesmoke;
          }
          a:focus {
            outline: none;
          }
        `}</style>
        <GoogleAnalytics />
      </ThemeProvider>
    )
  }
}
