/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    boxShadow: {
      integershadow: "0px 20px 60.57143px 0px #E5E9F6;"
    },
    extend: {
      screens: {
        default: '1320px',
        xl: '1320px',
      },
      fontFamily: {
        Inter:["Inter"]
      }
    },
  },
  plugins: [],
}

