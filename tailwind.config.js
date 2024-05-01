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
        'lightDots': 'url("./src/lib/assets/dot-pattern-dark.svg")',
        'darkDots': 'url("./src/lib/assets/dot-pattern-darkV2.svg")',
      },
      backgroundSize: {
        'smallDots': '8%',
        'largeDots': '23%',
      },
      backgroundPosition: {
        'dotsPosition': '10% 9.9%',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['emerald', 'dim']
  }
}
