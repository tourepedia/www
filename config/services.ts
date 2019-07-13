import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default {
  ga: {
    googleSiteVerification: publicRuntimeConfig.googleSiteVerification,
    googleAnalyticsTrackingID: publicRuntimeConfig.googleAnalyticsTrackingID,
  },
}
