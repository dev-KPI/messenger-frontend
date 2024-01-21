import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-blue-white':
          'linear-gradient(168deg, rgb(224, 237, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
        'gradient-purple-blue':
          'linear-gradient(91deg, rgba(145, 159, 222, 1) 0%, rgba(45, 109, 205, 1) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        base: {
          black: 'rgba(28, 29, 31, 1)',
          gray: {
            1: 'rgba(247, 248, 252, 1)',
            2: 'rgba(240, 242, 248, 1)',
            3: 'rgba(199, 207, 223, 1)',
            4: 'rgba(181, 183, 193, 1)',
            5: 'rgba(124, 127, 143, 1)',
            6: 'rgba(72, 79, 101, 1)',
            7: 'rgba(56, 60, 76, 1)',
            8: 'rgba(43, 45, 48, 1)',
            9: 'rgba(38, 39, 44, 1)',
          },
          white: 'rgba(255, 255, 255, 1)',
        },
        border: 'hsl(var(--border))',
        bright: {
          blue: 'rgba(53, 113, 207, 1)',
          indigo: 'rgba(127, 146, 220, 1)',
          orange: 'rgba(255, 149, 0, 1)',
          purple: 'rgba(144, 82, 222, 1)',
          red: 'rgba(255, 59, 48, 1)',
          teal: 'rgba(92, 193, 250, 1)',
          yellow: 'rgba(255, 204, 0, 1)',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
      },
      fontFamily: {
        text: ['var(--font-text)'],
        title: ['var(--font-title)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
}
export default config
