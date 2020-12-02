import Link from 'next/link'
import MainLayout from 'layout/MainLayout'
import style from 'pages/style.module.css'

export default function HomePage() {
  return (
    <MainLayout>

      <div className={ style.container }>

        <div className={ style.background }>
          <video autoPlay muted loop>
            <source src="/video/home/j_KZuHezTlI_480p.mp4" type="video/mp4"/>
          </video>
        </div>

        <div
          className={ style.foreground }
          style={{
            color: 'white',
            background: 'rgba( var(--mainColor), 0.8 )',
          }}>
          <div>
            <h1> Dobrodošli </h1>
            <p> Curabitur tempus mattis quam. Integer purus diam, ultrices consequat posuere. </p>
            <Link href="/order" passHref>
              <div><a> Naručite </a></div>
            </Link>
          </div>
        </div>

      </div>

      <div className={ style.container }>

        <div className={ style.background }>
          <img src="/home/rezel-apacionado-MZfS19xrrz0-unsplash.png"/>
        </div>

        <div className={ style.foreground } style={{ justifyContent: 'flex-end', }}>
          <div style={{ background: 'rgba( 255, 255, 255, 0.8 )'}}>
            <h1> Upoznajte nas </h1>
            <p> Sed aliquet diam sit amet facilisis semper. Cras luctus ligula vitae porta suscipit. </p>
            <p> Donec sit amet est tempus risus ultricies vulputate. Suspendisse hendrerit. </p>
          </div>
        </div>

      </div>

    </MainLayout>
  )
}
