interface Props {
  color: string;
  className?: string;
}

export default function Ceker(props: Props){
  return (
    <svg className={ props?.className } viewBox="0 0 172 163" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-43 -128)">
        <circle transform="rotate(44)" cx="243" cy="126" r="20" fill="none" stroke={ props.color } strokeLinecap="round" strokeWidth="12"/>
      </g>
      <g transform="translate(-43 -41)" fill="none" stroke={ props.color }>
        <path d="m210 45-123 127" strokeLinecap="round" strokeWidth="12"/>
        <path d="m70 132-24 8" strokeLinecap="round" strokeWidth="12"/>
        <path d="m170 70c-68 69-3 3-71 72-11 11-31-26-19-44 27-39 100-39 90-28z" strokeWidth="10"/>
      </g>
    </svg>
  )
}
