/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      logo: 'Anta, sans-serif',
    },
    extend: {
      backgroundImage: {
        movies: "url('/movies.jpg')",
      },
    },
  },
  plugins: [],
};
