import { analyticsEventTypes } from './analytics'

const amplitudeApiKey = process.env.AMPLITUDE_API_KEY

export default class AmplitudeAnalytics {
  static initialize = () => {
    if (typeof window !== 'undefined') {
      const amplitude = require('amplitude-js')
      this.Amplitude = amplitude.getInstance()
      this.Amplitude.init(amplitudeApiKey, null, { includeReferrer: true, includeUtm: true })
    }
  }

  static pageView = ({ pathname, props }) => {
    const timestamp = Date.now()
    const eventProps = {
      pathname,
      timestamp,
      ...props
    }

    this.Amplitude.logEventWithTimestamp(analyticsEventTypes.pageView, eventProps, timestamp)
  }

  static event = ({ eventType, pathname, props }) => {
    const timestamp = Date.now()
    const eventProps = {
      pathname,
      timestamp,
      ...props
    }
    this.Amplitude.logEventWithTimestamp(eventType, eventProps, timestamp)
  }
}
