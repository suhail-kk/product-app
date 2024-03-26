
// const background = require('./src/assets/footer_image.jpg')

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'footer_background': "url('./assets/footer_image.jpg')",
      },
      fontSize: {
        hero: ['44px', {
          fontHeight: 600,
          lineHeight: " 121.5%",
          fontFamily: 'Advent Pro'
        }],
        // for paragrph common
        subPara: ['16px', {
          fontFamily: 'Cantarell',
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "140%",
        }],

      },
      colors: {
        primary_white: '#F6F8FC',
        subPara: "#222222"
      },
    }
  },
  plugins: [],
}
