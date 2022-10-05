import firebaseui from 'firebaseui'
// auth can't be imported as a es6 module...
const auth = require('firebase/auth')

export function initFirebaseAuthUi() {
    const ui = new firebaseui.auth.AuthUI(auth());
    ui.start('#store-connect', {
        signInOptions: [   
            auth.EmailAuthProvider.PROVIDER_ID
        ],
    })
} 