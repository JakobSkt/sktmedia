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
        'lightDots': 'url("./src/lib/images/dot-pattern-dark.svg")',
        'darkDots': 'url("./src/lib/images/dot-pattern-darkV2.svg")',
      },
      backgroundSize: {
        'dotsSize': '2%',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['cmyk', 'sunset']
  }
}
