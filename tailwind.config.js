/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors : {
        "ungutua" : ["#A78BFA"],
        "ungumuda" : ["#E879F9"],
        "abuabu" : ["#303234"]
      },
      dropShadow : {
        "bayangan" : '9px 9px 18px 0px rgba(0, 0, 0, 0.40), -9px -9px 18px 0px rgba(73, 73, 73, 0.40);'
      }
    },
  },
  plugins: [],
}

