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
        webScroll: {
          'to': { transform: 'translateX(-252%)' },
        },
        photoScroll: {
          'to': { transform: 'translateX(358%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 550ms ',
        webScroll: 'webScroll 60s linear infinite',
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
