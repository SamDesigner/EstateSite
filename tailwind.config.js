/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#e2c27e',
        temp:'#0B1A2A'
      }
    },
  },
  plugins: [],
}