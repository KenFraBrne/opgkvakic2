import Transition from 'react-transition-group/Transition'


interface Props {
  show: boolean;
  duration: number;
  children: JSX.Element;
}

export default function Fade(props: Props){ 

  const { show, duration, children } = props

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <Transition in={show} timeout={duration} unmountOnExit={true}>
      { state => (
        <div style={{...defaultStyle, ...transitionStyles[state]}}>
          { children }
        </div>
      )}
    </Transition>
  )
}
