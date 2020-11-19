interface Props {
  color: string;
  className?: string;
}

export default function User(props: Props) {
  return (
    <svg className={ props?.className } viewBox="0 0 77 77" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-109 -146)" fill="none" stroke={ props.color } strokeWidth="7">
        <circle cx="147" cy="168" r="19" strokeLinecap="round"/>
        <path d="m112 223c0-11 12-20 35-20s35 7 35 20"/>
      </g>
    </svg>
  )
}
