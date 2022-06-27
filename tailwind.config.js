/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': 'white',
        'content': '#383e42',
        'link': '#6290b8',
      },
    }
  },
  plugins: [],
}
