import firebase from 'firebase/app'
import 'firebase/firestore'
import { initializeFirebase } from '../initializeFirebase'
import Auth from './Auth'
import FirebaseService from './FirebaseService'

initializeFirebase()

const path = 'users'
const DB = firebase.firestore()
const REF = DB.collection(path)

export default class Users extends FirebaseService {
  static create = async ({ uid, email }) => {
    console.log('create user', { uid, email })
    await REF.doc(uid).set({ uid, email })
  }

  static bindCurrentUser = () => {
    const userId = Auth.currentFirebaseUser().uid
    console.log('bind current suer: ', userId)
    const path = 'currentUser'

    FirebaseService.dispatch({ type: 'CURRENT_USER_BIND_REQUEST', path })

    try {
      REF.doc(userId).onSnapshot(doc => {
        console.log(doc)
        const payload = doc.data()
        if (!payload) {
          FirebaseService.dispatch({ type: 'CURRENT_USER_BIND_FAILURE', payload, path })
          throw new Error('User is null')
        } else FirebaseService.dispatch({ type: 'CURRENT_USER_BIND_SUCCESS', payload, path })
      })
    } catch (error) {
      console.log(error)
    }
  }
}
