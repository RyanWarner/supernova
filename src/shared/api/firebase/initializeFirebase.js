import firebase from 'firebase/app'
import 'firebase/auth'

export const initializeFirebase = () => {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    // storageBucket: process.env.STORAGE_BUCKET,
    projectId: process.env.FIREBASE_PROJECT_ID
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}
