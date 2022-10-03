import { Task, TaskData } from "./Task";
import { stylesheet } from 'typestyle'
import { useQuery } from 'react-query'
import { GET_TASKS } from "../queries";

export interface TaskRepo {
    get(): Promise<TaskData>[]
    write(taskId: string, data: TaskData): Promise<void> 
}

interface Props {
    repo: TaskRepo
}

export function List({
    repo,
}: Props) {
    const { data: tasks } = useQuery([GET_TASKS], () => {
        return repo.get()
    })
    return (
        <div class={sheet.list}>
            {tasks.map((t) => (
                <Task
                    data={t}
                />
            ))}
        </div>
    )
}

const sheet = stylesheet({
    list: {
        maxWidth: 300,
        margin: 'auto',
        fontFamily: `'Open Sans', sans-serif`
    }
})