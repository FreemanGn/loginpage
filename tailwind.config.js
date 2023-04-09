/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'flower-img':"url('/img/flower.jpg')",
        'illustration-img':"url('/img/illustration.jpg')",
      },
      fontFamily:{
        inter:["Inter"]
      }
    },
  },
  plugins: [],
}

