import type { Config } from 'tailwindcss'

import { COLORS } from './src/constants/color.constants'

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: COLORS,
      spacing: {
        0.5: '0.12rem',
        layout: '1.4rem',
        'big-layout': '2.3rem'
      },
      fontFamily: {
        jost: ['var(--font-jost)', 'sans-serif'],
        montserrat: ['var(--font-montserrat-alternates)', 'sans-serif']
      },
      fontSize: {
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1rem',
        lg: '1.20rem',
        xl: '1.35rem',
        '1.5xl': '1.45rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.45rem',
        '5xl': '3.25rem',
        '6xl': '4.15rem',
        '7xl': '5.25rem',
        '8xl': '6.85rem',
        '9xl': '9.35rem'
      },
      boxShadow: {
        '3xl': '14px 18px 40px 4px',
        inset: 'inset 0px 18px 22px'
      },
      transitionDuration: {
        DEFAULT: '250ms'
      }
    }
  },
  plugins: []
}

export default config
