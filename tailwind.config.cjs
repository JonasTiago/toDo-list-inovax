/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightgray: '#fefefe',
        grayBorder: '#D9D9D9',
        grayInput: '#F2F2F2',
      },
      boxShadow: {
        '3xl': '0 0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
