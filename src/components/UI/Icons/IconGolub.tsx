import { FC } from 'react'

type IconGolubProps = { className?: string }

const IconGolub: FC<IconGolubProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="161"
      viewBox="0 0 196 161"
      width="196"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M142.835 91.4259C99.0216 106.204 61.9886 52.6329 48.9489 24C44.892 30.7734 38.1693 50.9704 43.733 77.5713C50.6875 110.822 84.5909 106.204 85.4602 121.906C86.3295 137.608 38.517 132.99 22 131.143C101.108 173.63 134.142 132.99 142.835 119.135C151.528 105.281 161.091 104.357 175 106.204C167.176 93.2732 156.744 85.8841 142.835 91.4259Z"
        fill="currentColor"
      />
      <path
        d="M121 86C140.504 78 157.84 46.6667 164.071 32C167.971 57.6 158.653 77.3333 153.506 84C149.443 84 137.253 84.4 121 86Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconGolub
