/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'cursive'],
      },
    },
    screens: {
      'xs': '480px',
      'sm': '668px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
};
