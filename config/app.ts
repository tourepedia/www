import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import destinations from './../assets/destinations'

export default {
  publicUrl: publicRuntimeConfig.publicUrl || '',
  phoneNumber: publicRuntimeConfig.bookingsPhoneNumber || '+918950392425',
  email: publicRuntimeConfig.bookingsEmail || 'bookings@tourepedia.com',
  supportEmail: publicRuntimeConfig.supportEmail || 'support@tourepedia.com',
  apiUrl: publicRuntimeConfig.apiUrl || 'http://localhost:8000/api',
  basePath: publicRuntimeConfig.basePath || '',
  version: publicRuntimeConfig.version || '1.0.0',
  keywords: ['travel', 'tourepedia', 'india tour'].concat(
    destinations.map(d => d.title),
  ),
}
