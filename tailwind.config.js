/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,vue, svg}"],
  theme: {
    extend: {
      colors:{
        primary: "#1a3329",
        accent: "#f7f7f7",
      },
      fontFamily: {
        'montserrat-black': ["Montserrat Black", "sans-serif"],
        'montserrat-bold': ["Montserrat Bold", "sans-serif"],
        'montserrat-medium': ["Montserrat Medium", "sans-serif"],
        'montserrat-regular': ["Montserrat Regular", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],

  daisyui: {
    themes: false, 
    darkTheme: false,
    styled: false,
  },


}

