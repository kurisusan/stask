import { Task, TaskData } from './Task'
import { stylesheet } from 'typestyle'

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
  tasks: TaskData[]
}

export function List ({
  tasks,
}: Props) {
  return (
    <div className={sheet.list}>
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
  }
})
