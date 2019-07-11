import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeFirebase } from '../initializeFirebase'
import Users from './Users'
import FirebaseService from './FirebaseService'

initializeFirebase()

export default class Auth extends FirebaseService {
  static registerAuthListener = () => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        Users.bindCurrentUser()
      // Analytics.setUserId({ userId: firebaseUser.uid })
      } else {
        console.log('No Firebase user found.')
      // store.dispatch({ type: BIND, payload: null, path: 'currentUser' })
      }
    })
  }

  static signUp = async ({ email, password, username }) => {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await Users.create({
      uid: data.user.uid,
      username
    })
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

  static signOut = () => {
    firebase.auth().signOut().then(() => {
      FirebaseService.dispatch({ type: 'LOGOUT' })
    }, (error) => {
      console.log('Signout error: ', error)
    })
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
