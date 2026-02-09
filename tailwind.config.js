/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        navbar: '#4B0082',
        'hero-gradient-start': '#4B0082',
        'hero-gradient-end': '#663399',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
      },
    },
  },
  plugins: [],
};
