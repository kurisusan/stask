import { Task, TaskData } from "./Task";
import { stylesheet } from 'typestyle'

interface Props {
    tasks: TaskData[]
}

export function List(props: Props) {
    
    return (
        <div class={sheet.list}>
            {props.tasks.map((t) => (
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