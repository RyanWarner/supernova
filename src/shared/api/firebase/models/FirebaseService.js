import Redux from '../../redux'
import { initializeFirebase } from '../initializeFirebase'
initializeFirebase()

export default class FirebaseService {
  static database = async ({ method, normalizer, verb, prefix, storeKey }) => {
    const type = `${prefix}_${verb}_REQUEST`
    Redux.dispatch({ type, storeKey })

    try {
      const callback = (snap) => {
        const payload = normalizer ? normalizer(snap) : snap
        const type = `${prefix}_${verb}_SUCCESS`
        return Redux.dispatch({ type, payload, storeKey })
      }
      await method(callback)
    } catch (error) {
      const type = `${prefix}_${verb}_FAILURE`
      Redux.dispatch({ type, payload: error, storeKey })
      throw error
    }
  }
}
