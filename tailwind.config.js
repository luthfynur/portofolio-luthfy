module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#1B1717',
      },
      fontFamily: {
        kleeone: ['Klee One'],
        fredokaone: ['Fredoka One'],
        ubuntucondensed: ['Ubuntu Condensed', 'sans-serif'],
      },
      backgroundImage: {
        photo: "url('/src/assets/Images/photo.jpg')",
      },
    },
  },
  plugins: [],
};
