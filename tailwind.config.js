/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, js}",
    "./tutorials/*.{html, js}"
  ],
  theme: {
    extend: {
      padding: {
        "10p": "10%"
      }
    },
  },
  plugins: [],
}

