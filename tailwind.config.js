/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#3b7145',
        temp:'#0B1A2A', 
        companyGreen:'#3b7145',
        customRed:'#ca311d'
      }
    },
  },
  plugins: [],
}