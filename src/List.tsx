import { JSX } from "preact/jsx-runtime";

interface Props {
    tasks: JSX.Element[]
}

export function List(props: Props) {
    return (
        <>
            {props.tasks}
        </>
    )
}