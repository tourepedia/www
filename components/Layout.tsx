import React, { Fragment } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  )
}
