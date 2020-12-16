import Link from 'next/link'
import { useState } from 'react'
import Logo from 'component/icons/Logo'
import User from 'component/icons/User'
import Ceker from 'component/icons/Ceker'
import Hamburger from 'component/icons/Hamburger'
import SideMenu from 'component/layout/SideMenu'
import UnderlinedLink from 'component/element/UnderlinedLink'
import style from 'component/layout/Navbar/style.module.css'

export default function Navbar(){

  const links = [
    { href: '/order', text: 'Naručite', },
    { href: '/about', text: 'O nama', },
    { href: '/news', text: 'Novosti',},
  ].map( ( link, i ) => (
    <li key={i}>
      <UnderlinedLink
        text={link.text}
        href={link.href}
        duration={200}
        color="rgb(var(--mainColor))"
        bgColor="white"/>
    </li>
  ))

  const [ open, setOpen ] = useState(false);

  const duration = 300;

  return (
    <>
      <div className={style.container}>
        <div
          className={style.Hamburger}
          onClick={() => setOpen(!open)}>
          <Hamburger {...{ open, duration }}/>
        </div>

        <Link href='/' passHref>
          <a className={style.Logo}>
            <Logo color="rgb( var(--mainColor) )"/>
          </a>
        </Link>

        <ul className={style.Navlinks}>
          { links }
        </ul>

        <div className={style.Icons}>
          <div>
            <Link href='/cart' passHref>
              <a> <Ceker color="rgb(var(--mainColor))"/> </a>
            </Link>
          </div>

          <div className={style.UserIcon}>
            <Link href='/user' passHref>
              <a> <User color="rgb(var(--mainColor))"/> </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.SideMenu}>
        <SideMenu {...{ open, duration }}/>
      </div>
    </>
  )
}
