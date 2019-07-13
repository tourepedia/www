import React, { Fragment, useEffect } from 'react'
import { useAmp } from 'next/amp'
import Head from 'next/head'
import Router from 'next/router'

import { trackPageView } from './../utils/ga'
import services from './../config/services'

export default function GoogleAnalytics() {
  const isAmp = useAmp()
  const isProduction = process.env.NODE_ENV === 'production'
  const GOOGLE_ANALYTICS_TRACKING_ID = services.ga.googleAnalyticsTrackingID
  useEffect(() => {
    Router.events.on('routeChangeComplete', trackPageView)
  }, [])
  if (!isProduction || !GOOGLE_ANALYTICS_TRACKING_ID) {
    return null
  }
  if (!isAmp) {
    return (
      <Fragment>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
        </Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${GOOGLE_ANALYTICS_TRACKING_ID}");`,
          }}
        />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <Head>
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          ></script>
        </Head>
        <amp-analytics type="gtag" data-credentials="include">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                vars: {
                  gtag_id: GOOGLE_ANALYTICS_TRACKING_ID,
                  config: {
                    [`${GOOGLE_ANALYTICS_TRACKING_ID}`]: { groups: 'default' },
                  },
                },
              }),
            }}
          ></script>
        </amp-analytics>
      </Fragment>
    )
  }
}
