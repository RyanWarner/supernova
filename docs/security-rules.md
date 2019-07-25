# Firebase security rules

Firebase security rules define who has what permissions on your Firebase data.

Cloud Firestore and Realtime Database both have their own security rules languages. I encourage you to read the official Firebase documentation before continuing on.

- [Firestore Security Rules Docs](https://firebase.google.com/docs/firestore/security/rules-structure)
- [Realtime Database Security Rules Docs](https://firebase.google.com/docs/database/security)

You can find the security rule definitions in this boilerplate in `src/shared/api/firebase/securityRules`

## Firestore

Firestore rules are found in the file `firestore.rules`

## RTDB

Security rules for RTDB are written in [Bolt](https://github.com/FirebaseExtended/bolt) and must be compiled into JSON before deploying to Firebase.

The NPM script `npm run bolt` will compile your security rules. `npm run bolt:deploy` will compile and deploy.

If you need to change the location of your security rules, edit the path found in `firebase.json` as well as any npm scripts the reference that path.
