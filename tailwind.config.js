/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        seaBlue:{
          DEFAULT: "#87B5B5",
          100: "#C0D8D8",
          200:"#4AA3A3"
        },
        black:"#000000"
      }
    },
  },
  plugins: [],
}

