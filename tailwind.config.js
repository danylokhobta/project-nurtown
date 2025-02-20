/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#545F71',
        'secondary': '#9BA5B7',
        'gray': '#333333',
        'light-gray-1': '#F9F9F9',
        'light-gray-2': '#F2F2F2',
        'light-gray-3': '#BDBDBD',
        'light-gray-4': '#E0E0E0',
        'light-gray-5': '#FBFBFB',
        'light-gray-6': '#F3F3F3',
        'card-bg': 'rgb(51, 51, 51, 0.8)'
      },
      screens: {
        's': '480px',
        'm': '768px',
        'l': '1024px',
      },
      maxWidth: {
        's': '480px',
        'm': '768px',
        'l': '1024px',
        'xl': '1200px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
