/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        warna: {
          '50': '#D4D8DD',
          '100': '#C0C8CA',
          '200': '#AAB7B7',
          '300': '#2E4156',
          '400': '#1A2D42',
        },
        danger: '#D7271D'
      },
      fontFamily:{
        poppins : [ "Poppins" , "sans-serif" ],
        monst : ["Montserrat Alternates" ],
      },
      screens: {
        '2xl': '1320px',  
      },
    },
  },
  plugins: [],
}
