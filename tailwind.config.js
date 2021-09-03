const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        // Set in Major Third typescale (1.25)
        base: '1em',
        lg: '1.25em',
        xl: '1.563em',
        '2xl': '1.953em',
        '3xl': '2.441em',
        '4xl': '3.052em',
        '5xl': '3.815em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
    // https://github.com/tailwindlabs/tailwindcss-typography
  ],
}

// https://tailwindcss.com/docs/theme

//https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7