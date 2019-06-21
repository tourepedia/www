import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import GlobalStyles from './global-styles'

const theme = {
  brand: '#ec6333',
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,600"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
      <GlobalStyles />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
