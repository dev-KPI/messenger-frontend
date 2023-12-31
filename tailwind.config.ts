import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue-white':
          'linear-gradient(168deg, rgb(224, 237, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
        'gradient-purple-blue':
          'linear-gradient(91deg, rgba(145, 159, 222, 1) 0%, rgba(45, 109, 205, 1) 100%)',
      },
      colors: {
        base: {
          black: 'rgba(28, 28, 30, 1)',
          gray: {
            1: 'rgba(142, 142, 147, 1)',
            2: 'rgba(174, 174, 178, 1)',
            3: 'rgba(199, 199, 204, 1)',
            4: 'rgba(209, 209, 214, 1)',
            5: 'rgba(229, 229, 234, 1)',
            6: 'rgba(242, 242, 247, 1)',
            7: 'rgba(44, 44, 46, 1)',
            8: 'rgba(58, 58, 60, 1)',
            9: 'rgba(99, 99, 102, 1)',
          },
          white: 'rgba(255, 255, 255, 1)',
        },
        bright: {
          blue: 'rgba(53, 113, 207, 1)',
          indigo: 'rgba(71, 112, 200, 1)',
          orange: 'rgba(255, 149, 0, 1)',
          purple: 'rgba(175, 82, 222, 1)',
          red: 'rgba(255, 59, 48, 1)',
          teal: 'rgba(92, 193, 250, 1)',
          yellow: 'rgba(255, 204, 0, 1)',
        },
      },
    },
  },
}
export default config
