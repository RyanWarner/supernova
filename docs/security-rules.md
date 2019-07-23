# Firebase security rules

Firebase security rules define who has what permissions on your Firebase data.

Cloud Firestore and Realtime Database both have their own security rules language. I encourage you to read the official Firebase documentation before continuing on.

- [Firestore Security Rules Docs](https://firebase.google.com/docs/firestore/security/rules-structure)
- [Realtime Database Security Rules Docs](https://firebase.google.com/docs/database/security)

You can find the security rule definitions in this boilerplate in `src/shared/api/firebase/securityRules`

## Firestore

Firestore rules are found in the file `firestore.rules`

## RTDB

Security rules for RTDB are written in Bolt and must be compiled into JSON before deploying to Firebase.

The NPM script `npm run bolt` will compile and deploy your security rules.

If you need to change the location of your security rules, edit the path found in `firebase.json`
