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
        // secondary:'#A27B5C',
        // secondary:'#E63946',
        secondary:'#1D4A27',

        temp:'#0B1A2A', 
        // companyGreen:'#3b7145',
        maroon:'#9A3F3F',
        companyGreen:'#1D4A27',
        customRed:'#ca311d',
        cardBg:'#E9F5E9',
        grayText:''
        // test:'#F79B72'
        // test:'#670D2F'
        // test:'#3A0519'
        // test:'#A27B5C' chosen
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}