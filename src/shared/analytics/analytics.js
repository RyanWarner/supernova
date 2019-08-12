import amplitudeAnalytics from './amplitudeAnalytics'
import googleAnalytics from './googleAnalytics'

export const analyticsEventTypes = {
  pageView: 'page.view',
  navClick: 'nav.click',
  buttonClick: 'button.click'
}

export default class Analytics {
  static initialize = () => {
    amplitudeAnalytics.initialize()
    googleAnalytics.initialize()
  }

  static pageView = ({ pathname }) => {
    amplitudeAnalytics.pageView({ pathname })
    googleAnalytics.pageView({ pathname })
  }

  static event = (event) => {
    amplitudeAnalytics.event(event)
    googleAnalytics.event(event)
  }

  static setUserId = ({ userId }) => {
    googleAnalytics.setUserId({ userId })
  }
}
