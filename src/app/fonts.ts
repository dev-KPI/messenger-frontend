import { Roboto, Ubuntu } from 'next/font/google'

export const title = Ubuntu({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['400', '500'],
})

export const text = Roboto({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-text',
  weight: '400',
})
