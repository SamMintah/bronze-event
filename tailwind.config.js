/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfaf5',
          100: '#faf0e6',
          200: '#f5e1cc',
          300: '#ecc9a3',
          400: '#e2ab73',
          500: '#d68c44',
          600: '#c47131',
          700: '#a35628',
          800: '#834425',
          900: '#6b3821',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};