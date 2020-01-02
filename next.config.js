require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? `.env.production`
      : `.env.development`,
})

module.exports = {
  env: {
    bookingsEmail: process.env.BOOKINGS_EMAIL,
    bookingsPhoneNumber: process.env.BOOKINGS_PHONE_NUMBER,
    supportEmail: process.env.SUPPORT_EMAIL,
    apiUrl: process.env.API_URL,
    basePath: process.env.BASE_PATH,
    googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    publicUrl: process.env.PUBLIC_URL,
    version: process.env.npm_package_version,
  },
  webpack(config) {
    // add svg/webpack to load the svg files a components
    // now we can import svg as
    // import SvgComponent from "<path>/file.svg"
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack?-svgo,+titleProp'],
    })
    return config
  },
}
