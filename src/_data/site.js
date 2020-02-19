const package = require('../../package.json')

module.exports = {
  name: 'Tourepedia',
  publicUrl: 'https://tourepedia.com',
  phoneNumber: process.env.BOOKINGS_PHONE_NUMBER || '+918950392425',
  email: process.env.BOOKINGS_EMAIL || 'bookings@tourepedia.com',
  supportEmail: process.env.SUPPORT_EMAIL || 'support@tourepedia.com',
  apiUrl: process.env.API_URL || 'https://api.tourepedia.com/api',
  keywords: ['travel', 'tour', 'trip'],
  version: package.version,
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ||
    'nePesoMtQ6t_pH0bRXV6vPsSdGiEMnRjcnF39ElMzPU',
  googleAnalyticsTrackingID:
    process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'UA-61051300-1',
}
