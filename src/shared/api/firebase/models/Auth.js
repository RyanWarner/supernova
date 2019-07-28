import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeFirebase } from '../initializeFirebase'
import Users from './Users'
import FirebaseService from './FirebaseService'

initializeFirebase()

export default class Auth extends FirebaseService {
  static set unsubscribe (unsubscribe) {
    this.unsubscribe = unsubscribe
  }

  static get unsubscribe () {
    return this.unsubscribe
  }

  static registerAuthListener = () => {
    Auth.unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log('fb user ', firebaseUser.uid)
        Users.bindCurrentUser()
      // Analytics.setUserId({ userId: firebaseUser.uid })
      } else {
        console.log('No Firebase user found.')
      // store.dispatch({ type: BIND, payload: null, path: 'currentUser' })
      }
    })
  }

  static signUp = async ({ email, password }) => {
    console.log('this.unsubscribe()', this.unsubscribe())
    await Auth.unsubscribe()
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await Users.create({
      uid: data.user.uid,
      email
    })
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
