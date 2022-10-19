import { createRoot } from 'react-dom/client'
import { FirebaseTaskRepo } from './repo/FirebaseTaskRepo'
import { List } from './List/List'
import { useState } from 'react'
import { SignInScreen } from './Auth/Auth'

// Init firebase as the task repo
// Can easily be replaced by implementing the TaskRepo interface
const repo = new FirebaseTaskRepo()

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
      tasks={[{
        id: '0',
        title: 'Create a stack of tasks',
        description: 'Create an application to stack tasks',
        creation: new Date(),
      }, {
        id: '1',
        title: 'Boring task',
        creation: new Date(),
      }]}
    />
  )
}

const $root = document.getElementById('root')

if (!$root) {
  throw Error('Missing root element')
}

createRoot($root).render(<App/>)
