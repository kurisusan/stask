import firebaseui from 'firebaseui'
// auth can't be imported as a es6 module...
// eslint-disable-next-line @typescript-eslint/no-var-requires
const auth = require('firebase/auth')

export function initFirebaseAuthUi () {
  const ui = new firebaseui.auth.AuthUI(auth())
  ui.start('#store-connect', {
    signInOptions: [
      auth.EmailAuthProvider.PROVIDER_ID
    ],
  })
}
