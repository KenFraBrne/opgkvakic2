import Logo from 'component/icons/Logo'
import LoadingCircles from 'component/LoadingCircles'
import style from 'layout/WelcomeScreen/style.module.css'

export default function WelcomeScreen(){
  return (
    <div className={style.container}>
      <div className={style.Logo}>
        <Logo fill="white"/>
        <LoadingCircles fill="white" nCircle={10}/>
      </div>
    </div>
  )
}
