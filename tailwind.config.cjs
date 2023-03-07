/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightgray: '#fefefe',
      },
      boxShadow: {
        '3xl': '0 0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
