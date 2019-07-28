import firebase from 'firebase/app'
import 'firebase/firestore'
import { initializeFirebase } from '../initializeFirebase'
import Auth from './Auth'
import FirebaseService from './FirebaseService'

initializeFirebase()

const path = 'users'
const prefix = 'USERS'
const DB = firebase.firestore()
const REF = DB.collection(path)

export default class Users {
  static set unsubscribe (listener) {
    this._unsubscribe = listener
  }

  static get unsubscribe () {
    return this._unsubscribe
  }

  static create = async (user) => {
    const method = (cb) =>
      REF.doc(user.uid).set(user).then(cb)

    const options = {
      method,
      verb: 'SET',
      prefix,
      storeKey: path
    }
    await FirebaseService.database(options)
  }

  static bindCurrentUser = async () => {
    const userId = Auth.currentFirebaseUser().uid
    const path = 'currentUser'

    const method = (cb) => {
      Users.unsubscribe = REF.doc(userId).onSnapshot(doc => cb(doc))
    }

    const options = {
      method,
      verb: 'LISTEN',
      normalizer: (doc) => doc.data(),
      prefix: 'CURRENT_USER',
      storeKey: path
    }
    await FirebaseService.database(options)
  }
}
