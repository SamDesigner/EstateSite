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
        secondary:'#A27B5C',
        temp:'#0B1A2A', 
        companyGreen:'#3b7145',
        customRed:'#ca311d',
        // test:'#F79B72'
        // test:'#670D2F'
        // test:'#3A0519'
        // test:'#A27B5C' chosen
      }
    },
  },
  plugins: [],
}