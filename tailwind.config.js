module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        personalizada: ['MiFuentePersonalizada', 'sans-serif'],
        personalizada2: ['MiFuentePersonalizada2', 'serif'],

      },
      backgroundImage: {
        'custom-image': "url('./src/images/imagen1.jpg')",
      },
    },
  },
  plugins: [],
}
