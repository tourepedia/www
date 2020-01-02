import destinations from './../assets/destinations'

export default {
  publicUrl: process.env.publicUrl || '',
  phoneNumber: process.env.bookingsPhoneNumber || '+918950392425',
  email: process.env.bookingsEmail || 'bookings@tourepedia.com',
  supportEmail: process.env.supportEmail || 'support@tourepedia.com',
  apiUrl: process.env.apiUrl || 'http://localhost:8000/api',
  basePath: process.env.basePath || '',
  version: process.env.version || '1.0.0',
  keywords: ['travel', 'tourepedia', 'india tour'].concat(
    destinations.map(d => d.title),
  ),
}
