import React from 'react'
import Head from 'next/head'

import appConfig from './../config/app'

interface SeoPros {
  title: string
  description?: string
}

export default function Seo({ title, description }: SeoPros) {
  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta name="keywords" content={appConfig.keywords.join(',')} />
      {/* Open Graph - Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={appConfig.publicUrl} />
      <meta
        property="og:image"
        content={`${appConfig.publicUrl}${appConfig.basePath}/static/logo.jpg`}
      />
      <meta property="og:site_name" content="Tourepedia" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tourepedia" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@sudhirmith" />
      <meta
        name="twitter:image"
        content={`${appConfig.publicUrl}${appConfig.basePath}/static/logo.jpg`}
      />
    </Head>
  )
}
