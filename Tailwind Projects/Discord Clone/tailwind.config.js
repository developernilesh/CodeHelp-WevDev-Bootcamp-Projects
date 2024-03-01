/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 10px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}

