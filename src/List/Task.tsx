import { stylesheet } from 'typestyle'

export interface TaskData {
    title: string
    description?: string
    creation: Date
}

interface Props {
    data: TaskData
}

export function Task({
    data
}: Props) {
    return (
        <div class={sheet.task}>
            <div class={sheet.title}>
                {data.title}
            </div>
            {data.description && (
                <div class={sheet.description}>
                    {data.description}
                </div>
            )}
        </div>
    )
}

const sheet = stylesheet({
    task: {
        border: '1px solid gray',
        borderRadius: 7,
        margin: '2px 4px',
        padding: '10px 12px',
    },
    title: {
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        fontWeight: '100'
    }
})