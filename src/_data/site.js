const package = require('../../package.json')

let publicUrl = process.env.PUBLIC_URL || 'https://tourepedia.com'

if (publicUrl === '/') {
  publicUrl = ''
}

module.exports = {
  name: 'Tourepedia',
  publicUrl,
  phoneNumber: process.env.BOOKINGS_PHONE_NUMBER || '+919166021917',
  email: process.env.BOOKINGS_EMAIL || 'bookings@tourepedia.com',
  supportEmail: process.env.SUPPORT_EMAIL || 'support@tourepedia.com',
  apiUrl: process.env.API_URL || publicUrl + '/.netlify/functions',
  keywords: ['travel', 'tour', 'trip'],
  version: process.env.npm_package_version,
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ||
    'nePesoMtQ6t_pH0bRXV6vPsSdGiEMnRjcnF39ElMzPU',
  googleAnalyticsTrackingID:
    process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'UA-61051300-1',
  isAmp: process.env.AMP,
  ampDir: '/amp',
}
