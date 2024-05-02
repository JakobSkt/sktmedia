import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
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
          'to': { transform: 'translateX(-255%)' },
        },
        photoScroll: {
          'to': { transform: 'translateX(80%)' },
        },
      },
      animation: {
        wiggle: 'wiggle ease-out 750ms ',
        webScroll: 'webScroll 30s linear infinite',
        photoScroll: 'photoScroll 30s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['emerald', 'dim']
  }
}
