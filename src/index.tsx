import { createRoot } from 'react-dom/client'
import { FirebaseTaskRepo } from './repo/FirebaseTaskRepo'
import { List } from './List/List'
import { useState } from 'react'
import { SignInScreen } from './Auth/Auth'
import { QueryClient, QueryClientProvider } from 'react-query'

// Init firebase as the task repo
// Can easily be replaced by implementing the TaskRepo interface
const repo = new FirebaseTaskRepo()

const queryClient = new QueryClient()

function App () {
  const [isSignedIn, setIsSignedIn] = useState(false)

  if (!isSignedIn) {
    return (
      <SignInScreen
        setIsSignedIn={setIsSignedIn}
      />
    )
  }

  return (
    <List
      repo={repo}
    />
  )
}

const $root = document.getElementById('root')

if (!$root) {
  throw Error('Missing root element')
}

createRoot($root).render(
  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>
)
