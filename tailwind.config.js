/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#fe9e0d',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        sfontsize1: '2rem',
        sfontsize2: '10vw'
      },
      lineHeight: {
        slineheight1: '1',
        slineheight2: '2',
        slineheight3: '3',
        slineheight4: '4',
        slineheight5: '5',
        slineheight6: '6',
      }
    },
  },
  plugins: [],
}