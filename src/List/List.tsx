import { Task, TaskData } from './Task'
import { stylesheet } from 'typestyle'
import { useQuery } from 'react-query'
import { GET_TASKS } from '../queries'
import { Loader } from './Loader'

export interface TaskUpdateData {
  title: string
  description?: string
}

export interface TaskRepo {
  get: () => Promise<TaskData[]>
  update: (taskId: string, data: TaskData) => Promise<void>
  create: (data: TaskData) => Promise<void>
  delete: (taskId: string) => Promise<void>
}

interface Props {
  repo: TaskRepo
}

export function List ({
  repo,
}: Props) {
  const {
    data: tasks = [],
    isLoading,
  } = useQuery([GET_TASKS], async () => await repo.get())
  return (
    <div className={sheet.list}>
      <div className={sheet.loaderContainer}>
        {isLoading && <Loader/>}
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          data={task}
        />
      ))}
    </div>
  )
}

const sheet = stylesheet({
  list: {
    maxWidth: 400,
    margin: 'auto',
    fontFamily: '\'Open Sans\', sans-serif'
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  }
})
