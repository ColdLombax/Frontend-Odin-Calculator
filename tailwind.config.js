module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Theme #1
        'dark-font': '#FFFFFF',
        'dark-screen-bg': '#181F33',
        'dark-btn-bg': '#242D44',
        'dark-primary': '#3A4663',
        'dark-secondary': '#D03F2F',
        'dark-btn-shadow': '#B3A497',
        'dark-btn-primary': '#EAE3DC',
        'dark-btn-secondary': '#647198',

        // Theme #2
        'light-font': '#36362C',
        'light-screen-bg': '#EEEEEE',
        'light-btn-bg': '#D2CDCD',
        'light-primary': '#E6E6E6',
        'light-secondary': '#C85402',
        'light-btn-shadow': '#A79E91',
        'light-btn-primary': '#E5E4E1',
        'light-btn-secondary': '#378187',

        // Theme #3
        'retro-font': '#FFE53D',
        'retro-screen-bg': '#1E0936',
        'retro-btn-bg': '#1E0936',
        'retro-primary': '#17062A',
        'retro-secondary': '#00DED0',
        'retro-btn-shadow': '#881C9E',
        'retro-btn-primary': '#331C4D',
        'retro-btn-secondary': '#56077C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
