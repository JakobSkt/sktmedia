import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      grayscale: {
        50: '50%'
      },
      backgroundImage: {
        'lightDots': 'url("$lib/assets/dot-pattern-dark.svg")',
        'darkDots': 'url("$lib/assets/dot-pattern-darkV2.svg")',
      },
      backgroundSize: {
        'smallDots': '12%',
        'largeDots': '23%',
      },
      backgroundPosition: {
        'dotsPosition': '10% 9.9%',
      },
      fontSize: {
        'xxs': '0.5rem',
        'xxxs': '0.2rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(7deg)' },
          '50%': { transform: 'rotate(-7deg)' },
        },
        webScrollSm: {
          '100%': { transform: 'translateX(-300%)' },
        },
        webScrollMd: {
          '100%': { transform: 'translateX(-300%)' },
        },
        webScrollLg: {
          '100%': { transform: 'translateX(-600%)' },
        },
        photoScroll: {
          'to': { transform: 'translateX(358%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 550ms ',
        webScrollSm: 'webScrollSm 25s linear infinite',
        webScrollMd: 'webScrollMd 45s linear infinite',
        webScrollLg: 'webScrollLg 65s linear infinite',

        photoScroll: 'photoScroll 85s linear infinite',
      },
      screens: {
        '3xl': '1850px'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['emerald', 'dim']
  }
}
