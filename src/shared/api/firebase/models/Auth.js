import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeFirebase } from '../initializeFirebase'
import Users from './Users'
import FirebaseService from './FirebaseService'
import Redux from '../../redux'

initializeFirebase()

export default class Auth {
  static set unsubscribe (listener) {
    this._unsubscribe = listener
  }

  static get unsubscribe () {
    return this._unsubscribe
  }

  static registerAuthListener = () => {
    Auth.unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        Users.bindCurrentUser()
        // Analytics.setUserId({ userId: firebaseUser.uid })
      } else {
        Redux.dispatch({ type: 'CURRENT_USER_LISTEN_SUCCESS', payload: null, storeKey: 'currentUser' })
      }
    })
  }

  static signUp = async ({ email, password }) => {
    // Unsubscribe from auth listener while we create a new user.
    Auth.unsubscribe()
    Users.unsubscribe()

    // Create a new Firebase auth record, and create a new user in the database.
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await Users.create({
      uid: data.user.uid,
      email
    })

    // Re-register auth listener
    Auth.registerAuthListener()
  }

  static email = () => {
    return firebase.auth().currentUser ? firebase.auth().currentUser.email : null
  }

  static updatePassword = (newPassword) => {
    const user = firebase.auth().currentUser
    return user.updatePassword(newPassword)
  }

  static updateEmail = (email) => {
    const user = firebase.auth().currentUser
    return user.updateEmail(email)
  }

  static signOut = async () => {
    await firebase.auth().signOut()
    FirebaseService.dispatch({ type: 'LOGOUT' })
  }

  static signIn = ({ email, password }) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  static sendPasswordResetEmail = (email) => {
    return firebase.auth().sendPasswordResetEmail(email)
  }

  static currentFirebaseUser = () => {
    return firebase.auth().currentUser
  }
}
