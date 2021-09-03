const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        // Set in Perfect Fourth typescale (1.33)
        base: '1.25em',
        lg: '1.66em',
        xl: '2.21em',
        '2xl': '2.94em',
        '3xl': '3.91em',
        '4xl': '5.2em',
        '5xl': '6.92em',
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.black'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              '*': {
                color: theme('colors.blue.600'),
              },
              code: {color: theme('colors.blue.600')},
            },
          },
        },
      }),
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