import { Task, TaskData } from './Task'
import { stylesheet } from 'typestyle'
import { useMutation, useQuery } from 'react-query'
import { GET_TASKS } from '../queries'
import { Loader } from './Loader'
import { ButtonAddTask } from './ButtonAddTask'
import { useState } from 'react'

export interface TaskUpdateData {
  title: string
  description?: string
}

type TaskDataCreate = Pick<TaskData, 'title' | 'description'>

export interface TaskRepo {
  get: () => Promise<TaskData[]>
  update: (taskId: string, data: TaskData) => Promise<void>
  create: (data: TaskDataCreate) => Promise<void>
  delete: (taskId: string) => Promise<void>
}

interface Props {
  repo: TaskRepo
}

export function List ({
  repo,
}: Props) {
  // Task to be created or edited
  // If no id, a new one is created
  const [editingTask, setEditingTask] = useState<Partial<TaskData>>()
  const {
    data: tasks = [],
    isLoading,
  } = useQuery([GET_TASKS], async () => await repo.get())
  const {
    mutate: addTask,
  } = useMutation(async (newTask: TaskDataCreate) => await repo.create(newTask))
  return (
    <div className={sheet.list}>
      <ButtonAddTask
        onClick={() => setEditingTask({})}
      />
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
