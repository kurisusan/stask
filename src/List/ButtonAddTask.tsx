import { stylesheet } from 'typestyle'
import { PaperFrame } from './PaperFrame'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
  onClick: () => void
}

export function ButtonAddTask (props: Props) {
  return (
    <PaperFrame
      classNames={[sheet.paper]}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={faSquarePlus} />
      <span className={sheet.text}>
        Add Task
      </span>
    </PaperFrame>
  )
}

const sheet = stylesheet({
  paper: {
    border: '0',
    textAlign: 'center',
    fontSize: 20,
    cursor: 'pointer',
  },
  text: {
    marginLeft: 10,
  }
})
