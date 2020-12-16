import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import MainLayout from 'layout/MainLayout'
import UnderlinedLink from 'component/element/UnderlinedLink'
import style from 'pages/style.module.css'

export default function HomePage() {
  return (
    <MainLayout>

      <div className={ style.vidContainer }>

        <div className={ style.background }>
          <video autoPlay muted loop>
            <source src="/video/home/j_KZuHezTlI_480p.mp4" type="video/mp4"/>
          </video>
        </div>

        <div className={ style.foreground }>
          <div>
            <Fade right duration={1500}>
              <h1> Dobrodošli </h1>
              <p> Curabitur tempus mattis quam. Integer purus diam, ultrices consequat posuere. </p>
              <Link href="/order" passHref>
                <a> Naručite </a>
              </Link>
            </Fade>
          </div>
        </div>

      </div>


      <div className={ style.imgContainer }>

        <div className={ style.background }>
          <img src="/home/rezel-apacionado-MZfS19xrrz0-unsplash.png"/>
        </div>

        <div className={ style.foreground }>
          <div>
            <Fade left duration={1500}>
              <h1> Upoznajte nas </h1>
              <p> Sed aliquet diam sit amet facilisis semper. Cras luctus ligula vitae porta suscipit. </p>
              <p> Donec sit amet est tempus risus ultricies vulputate. Suspendisse hendrerit. </p>
            </Fade>
          </div>
        </div>

      </div>

    </MainLayout>
  )
}
