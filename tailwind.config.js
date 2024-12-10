/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        radikal: ['Radikal Bold', 'sans-serif']
      },
      backgroundImage: {
        'hero-mainpage': "url('/assets/img/hok-pc.jpg')",
      }
    },
  },
  plugins: [],
}

