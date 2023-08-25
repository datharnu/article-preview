/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        verydarkgray: "hsl(217, 19%, 35%)",
        desaturatedblue: "hsl(214, 17%, 51%)",
        grayishblue: "hsl(212, 23%, 69%)",
        lightgrayishblue: " hsl(210, 46%, 95%)"
      }
    },
  },
  plugins: [],
}
