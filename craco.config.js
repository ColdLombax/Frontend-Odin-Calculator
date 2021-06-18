module.exports = {
  style: {
    postcss: {
      plugins: [
        global.require('tailwindcss'),
        global.require('autoprefixer'),
      ],
    },
  },
};
