/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        club: {
          burgundy: '#3b0f1c',
          maroon: '#5b0f23',
          gold: '#e2b66d',
          dark: '#0b0c10',
        },
      },
    },
  },
  plugins: [],
}

