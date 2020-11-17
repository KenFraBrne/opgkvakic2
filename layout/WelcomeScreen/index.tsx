import Logo from 'component/icons/Logo'
import Circles from 'component/loading/Circles'
import style from 'layout/WelcomeScreen/style.module.css'

export default function WelcomeScreen(){
  return (
    <div className={style.container}>
      <div className={style.Logo}>
        <Logo color="white"/>
        <Circles fill="white" nCircle={10}/>
      </div>
    </div>
  )
}
