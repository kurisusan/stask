import { keyframes, stylesheet } from 'typestyle'

export function Loader () {
  const size = (s: number) => ({
    width: s,
    height: s,
  })
  return (
    <div className={sheet.loader} style={size(40)}></div>
  )
}

// Keyframes from the heart animation at https://loading.io/css/
const animationFrames = keyframes({
  '0%': {
    transform: 'scale(0.95)',
  },
  '5%': {
    transform: 'scale(1.1)',
  },
  '39%': {
    transform: 'scale(0.85)',
  },
  '45%': {
    transform: 'scale(1)',
  },
  '60%': {
    transform: 'scale(0.95)',
  },
  '100%': {
    transform: 'scale(0.9)',
  },
})

const sheet = stylesheet({
  loader: {
    position: 'relative',
    border: '5px solid gray',
    borderRadius: 50,
    animationName: animationFrames,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
})
