import { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../firebaseConfig'
import 'firebase/compat/auth'
import { stylesheet } from 'typestyle'

firebase.initializeApp(firebaseConfig)

interface Props {
  setIsSignedIn: (val: boolean) => void
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
}

export function SignInScreen ({
  setIsSignedIn,
}: Props) {
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return (
      <div>
        <div className={sheet.head}>
          <h1 className={sheet.title}>STASK</h1>
          <p className={sheet.description}>Please sign-in</p>
        </div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
  )
}

const sheet = stylesheet({
  head: {
    textAlign: 'center',
  },
  title: {
    letterSpacing: 10,
    fontFamily: '"Fuzzy Bubbles", cursive',
    fontSize: 40,
  },
  description: {
    color: 'gray',
    fontFamily: '"Open Sans", sans-serif',
    marginBottom: 60,
  }
})
