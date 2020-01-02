/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default ReactComponent
}

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly BASE_PATH: string
    readonly BOOKINGS_PHONE_NUMBER: string
    readonly BOOKINGS_EMAIL: string
    readonly API_URL: string
    readonly GOOGLE_SITE_VERIFICATION: string
    readonly GOOGLE_ANALYTICS_TRACKING_ID: string
    readonly bookingsEmail: string
    readonly bookingsPhoneNumber: string
    readonly supportEmail: string
    readonly apiUrl: string
    readonly basePath: string
    readonly googleSiteVerification: string
    readonly googleAnalyticsTrackingID: string
    readonly publicUrl: string
    readonly version: string
  }
}

declare namespace JSX {
  import * as React from 'react'

  interface AmpImg {
    alt?: string
    src?: string
    width?: string
    height: string
    layout?: string
    style?: CSSProperties
  }
  interface AmpAnalytics {
    type: string
    'data-credentials': string
    children: React.ReactNode
  }
  interface AmpInstallServiceworker {
    src: string
    layout: string
  }
  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-analytics': AmpAnalytics
    'amp-install-serviceworker': AmpInstallServiceworker
  }
}
