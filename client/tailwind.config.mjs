/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      primary: ['Libre Franklin', 'sans-serif']
    },
    extend: {
      colors: {
        primaryTxt: '2F2F2F',
        secondaryTxt: '#545454',
        accentTxt: '#595959',
        primaryBtn: {
          DEFAULT: '#0084FD',
          hover: '#2F2F2F'
        }
      }
    },
  },
  plugins: [],
}