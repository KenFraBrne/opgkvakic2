import { useState, useEffect } from 'react'
import style from 'component/LoadingCircles/style.module.css'

interface CircleProps {
  key: any;
  fill: string;
  delay: number;
}

interface CirclesProps {
  fill: string;
  nCircle: number;
}

function Circle(props: CircleProps){
  const [ pulse, setPulse ] = useState(style.circle)
  useEffect(() => {
    setTimeout(() => setPulse(style.circlePulse), props.delay)
  }, [])
  return (
    <div className={pulse}>
      <svg height="100%" width="100%">
        <circle r="10%" cx="50%" cy="50%" fill={props.fill}/>
      </svg>
    </div>
  )
}

export default function Circles(props: CirclesProps){
  const circles = Array(props.nCircle).fill(null).map( (_, i) => (
    <Circle key={i} fill={props.fill} delay={i*100}/>
  ))
  return (
    <div className={style.circles}>
      { circles }
    </div>
  )
}
