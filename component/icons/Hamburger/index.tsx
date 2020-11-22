// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

import Transition from 'react-transition-group/Transition'
import style from './style.module.css'

interface Props {
  open: boolean;
  duration: number;
}

export default function Hamburger(props: Props){

  const initialStyle = {
    transition: `all ${ props.duration }ms ease`,
    transform: 'rotate(0deg) scale(1.0, 1.0) translate(0px, 0px)',
  }

  const finalStyle = [ 
    { transform: 'rotate(+140deg) scale(+0.7, 1) translate(-1.00rem, -0.45rem)' },
    { transform: 'rotate(+000deg) scale(-1.1, 1) translate(-1.50rem, -0.00rem)' },
    { transform: 'rotate(-140deg) scale(+0.7, 1) translate(-1.00rem, +0.45rem)' },
  ]

  const transitionStyles = {
    entering: { ...finalStyle },
    entered: { ...finalStyle },
    exiting: { ...initialStyle },
    exited: { ...initialStyle },
  }

  const divs = state => Array(3).fill(null).map( (_, ind) => (
    <div key={ ind } style={{ ...initialStyle, ...transitionStyles[state][ind] }}/>
  ))

  return (
    <Transition
      in={ props.open }
      timeout={ props.duration }>
      { state =>
      <button className={ style.Hamburger }>
        { divs(state) }
      </button>
      }
    </Transition>
  )
}
