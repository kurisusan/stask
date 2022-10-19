import { stylesheet } from 'typestyle'
import { PaperFrame } from './PaperFrame'

export interface TaskData {
  id: string
  title: string
  description?: string
  creation: Date
}

interface Props {
  data: TaskData
}

export function Task ({ data }: Props): JSX.Element {
  return (
    <>
      <div className={sheet.dropZone}></div>
      <PaperFrame>
        <div className={sheet.title}>{data.title}</div>
        {data.description && (
          <div className={sheet.description}>{data.description}</div>
        )}
      </PaperFrame>
    </>
  )
}

const sheet = stylesheet({
  dropZone: {
    height: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: '100',
  },
})
