import { useState, useEffect } from 'react'
import Link from 'next/link'
import Transition from 'react-transition-group/Transition'
import { DEFAULT_ENCODING } from 'crypto'

interface Props {
  text: string;
  href: string;
  color: string;
  bgColor: string;
  duration: number;
}

type TransitionKeys = 'entering' | 'entered' | 'exiting' | 'exited'

type TransitionStyles = { [ key in TransitionKeys ]: React.CSSProperties }

export default function UnderlinedLink(props: Props){ 

  const { text, href, duration, color, bgColor, } = props

  const defaultStyle: React.CSSProperties = {
    color: color,
    textDecoration: 'none',
    backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), linear-gradient(${color}, ${color})`,
    backgroundSize: '0 2px, 0 2px',
    backgroundPosition: '0 100%, 0 100%',
    backgroundRepeat: 'no-repeat, no-repeat',
    transition: `all ${duration}ms ease`,
  }

  const transitionStyles: TransitionStyles  = {
    entering: { backgroundSize: '0 2px, 100% 2px' },
    entered: { backgroundSize: '0 2px, 100% 2px' },
    exiting: { backgroundSize: '100% 2px, 100% 2px'},
    exited: { },
  }

  const [ over, setOver ] = useState(false)

  return (
    <Transition in={over} timeout={duration} appear={true}>
      { state => (
        <Link href={href} passHref>
          <a
            onMouseEnter={ () => setOver(!over) }
            onMouseLeave={ () => setOver(!over) }
            style={{...defaultStyle, ...transitionStyles[state]}}>
            {text}
          </a>
        </Link>
      )}
    </Transition>
  )
}
