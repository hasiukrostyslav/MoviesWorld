/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      logo: 'Anta, sans-serif',
    },
    extend: {
      backgroundImage: {
        movies: "url('/movies.jpg')",
      },
      height: {
        pad: 'calc(100vh - 2rem)',
        hero: 'calc(100vh - 8.75rem)',
        img: '25rem',
      },
      aspectRatio: {
        img: '4 / 3',
      },
      brightness: {
        35: '.35',
      },
    },
  },
  plugins: [],
};
