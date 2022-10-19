import { PropsWithChildren } from 'react'
import { stylesheet } from 'typestyle'

interface Props {
  classNames?: string[]
  onClick?: () => void
}

export function PaperFrame (props: PropsWithChildren<Props>) {
  return (
    <div
      className={[sheet.paper, props.classNames].join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

const sheet = stylesheet({
  paper: {
    border: '2px solid gray',
    borderRadius: 7,
    margin: '2px 4px',
    padding: '10px 12px',
  },
})
