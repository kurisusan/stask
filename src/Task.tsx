
interface Props {
    title: string
    description?: string
}

export function Task(props: Props) {
    return (
        <div>
            {props.title}
        </div>
    )
}