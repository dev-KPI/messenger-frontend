import IconProps from '@/types/interfaces/IconProps'
import { getIconDimension } from '@/utils'

export const Icons = {
  check: ({ size, ...props }: IconProps) => {
    const dimension = getIconDimension(size)
    return (
      <svg
        fill="none"
        height={dimension}
        viewBox="0 0 20 20"
        width={dimension}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M16.6829 6.97652C16.8881 6.76125 17 6.48728 17 6.16438C17 5.51859 16.515 5 15.8995 5C15.5917 5 15.3119 5.13699 15.0974 5.36204L8.71795 12.2114L5.90263 9.11204C5.68812 8.88699 5.399 8.75 5.10054 8.75C4.48498 8.75 4 9.26859 4 9.91438C4 10.2373 4.11192 10.5113 4.31711 10.7265L7.8599 14.589C8.10239 14.863 8.40084 14.9902 8.72727 15C9.0537 15 9.3335 14.863 9.58532 14.589L16.6829 6.97652Z"
          fill="white"
        />
      </svg>
    )
  },
  golub: (props: IconProps) => (
    <svg
      fill="none"
      height="161"
      viewBox="0 0 196 161"
      width="196"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
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
  ),
}
