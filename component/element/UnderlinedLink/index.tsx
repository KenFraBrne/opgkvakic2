import { useState, useEffect } from 'react'
import Link from 'next/link'
import Transition from 'react-transition-group/Transition'
import { DEFAULT_ENCODING } from 'crypto'

interface Props {
  text: string;
  href: string;
  rgbColor: string;
  duration: number;
}

type TransitionKeys = 'entering' | 'entered' | 'exiting' | 'exited'

type TransitionStyles = { [ key in TransitionKeys ]: React.CSSProperties }

export default function UnderlinedLink(props: Props){ 

  const { text, href, rgbColor, duration } = props

  const defaultStyle: React.CSSProperties = {
    color: rgbColor,
    textDecoration: 'none',
    backgroundImage: `linear-gradient(rgb(${rgbColor}), rgb(${rgbColor}))`,
    backgroundSize: '0 2px',
    backgroundPosition: '0 100%',
    backgroundRepeat: 'no-repeat',
    transition: `all ${duration}ms ease`,
  }

  const transitionStyles: TransitionStyles  = {
    entering: { backgroundSize: '100% 2px' },
    entered: { backgroundSize: '100% 2px', backgroundPosition: '100% 100%' },
    exiting: { backgroundSize: '0 2px', backgroundPosition: '100% 100%' },
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
