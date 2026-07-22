/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#F6F2EA',
        ink: '#221F1B',
        berry: '#7A2E3B',
        'berry-dark': '#5A1F2C',
        gold: '#B08D57',
        sage: '#7C8A6E'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
};
