import { render } from 'react-dom'
import { FirebaseTaskRepo } from './repo/FirebaseTaskRepo'
import { List } from './List/List'

// Init firebase as the task repo
// Can easily be replaced by implementing the TaskRepo interface
const repo = new FirebaseTaskRepo()

const $app = document.querySelector('#app')
if ($app === null) {
  throw Error('missing #app element')
}

render(
  (() => {
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
  })(),
  $app,
)
