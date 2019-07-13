import { isLocalhost } from './serviceWorker'
import services from './../config/services'

export function trackPageView(url: string) {
  if (isLocalhost) return
  try {
    ;(<any>window).gtag('config', services.ga.googleAnalyticsTrackingID, {
      page_location: url,
    })
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}
