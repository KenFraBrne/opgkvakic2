import Link from 'next/link'
import Transition from 'react-transition-group/Transition'
import User from 'component/icons/User'
import Ceker from 'component/icons/Ceker'
import style from './style.module.css'

interface Props {
  open: boolean;
  duration: number;
}

type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited'

export default function SideMenu(props: Props) {

  const links = [
    { href: '/order', text: 'Naručite', },
    { href: '/about', text: 'O nama', },
    { href: '/news', text: 'Novosti', },
  ].map( ( link, i ) => (
    <li key={i}>
      <Link href={link.href} passHref>
        <a className={style.underline}> { link.text } </a>
      </Link>
    </li>
  ))

  const transitionStyle = { transition: `all ${ props.duration }ms ease`, }

  const initialStyle = {
    container : { background: 'rgba(0, 0, 0, 0.0)', zIndex: -1, ...transitionStyle },
    SideMenu : { left: '-80%', ...transitionStyle },
  }

  const finalStyle = {
    container : { background: 'rgba(0, 0, 0, 0.5)', zIndex: 20, },
    SideMenu : { left: '0' },
  }

  const transitionStyles = {
    entering: { ...finalStyle },
    entered: { ...finalStyle },
    exiting: { ...initialStyle },
    exited: { ...initialStyle },
  }

  return (
    <Transition in={ props.open } timeout={ props.duration }>
      { ( state: TransitionState ) => (
        <div
          className={ style.container }
          style={{ ...initialStyle.container, ...transitionStyles[state].container }}>
          <div
            className={ style.SideMenu }
            style={{ ...initialStyle.SideMenu, ...transitionStyles[state].SideMenu }}>
            <ul className={ style.Navlinks }>{ links }</ul>
            <div className={ style.UserIcon }>
              <User color="rgb( var(--mainColor) )"/>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}
