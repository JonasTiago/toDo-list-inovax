/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightgray: '#fefefe',
        grayBorder: '#D9D9D9',
        grayInput: '#F2F2F2',
        bgTask: '#1B1D37',
      },
      boxShadow: {
        '3xl': '0 0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        notask: "url('/img/hero-pattern.svg')",
      },
      keyframes: {
        contentShow: {
          'from': {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          'to': {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        overlayShow :{
          'from': {
            opacity: 0,
          },
          'to': {
            opacity: 1,
          }
        }
      },
    },
  },
  plugins: [],
};
