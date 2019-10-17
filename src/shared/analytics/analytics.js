import amplitude from './amplitude'
import googleAnalytics from './googleAnalytics'

export const analyticsEventTypes = {
  pageView: 'page.view',
  navClick: 'nav.click',
  buttonClick: 'button.click'
}

export default class Analytics {
  static initialize = () => {
    googleAnalytics.initialize()
    return amplitude.initialize()
  }

  static pageView = ({ pathname }) => {
    amplitude.pageView({ pathname })
    googleAnalytics.pageView({ pathname })
  }

  static event = (event) => {
    amplitude.event(event)
    googleAnalytics.event(event)
  }

  static setUserId = ({ userId }) => {
    googleAnalytics.setUserId({ userId })
  }
}
