'use strict';

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['app/**/*.{js,ts,hbs}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      ...colors,

      ember: {
        brand: 'var(--ember-brand)',
        black: 'var(--ember-black)',
        'burnt-ember': 'var(--ember-burnt-ember)',
        gray: 'var(--ember-gray)',
        blue: 'var(--ember-blue)',
        'faint-gray': 'var(--ember-faint-gray)',
        'light-blue': 'var(--ember-light-blue)',
        linen: 'var(--ember-linen)',
        yellow: 'var(--ember-yellow)',
        white: 'var(--ember-white)',
      },
    },
    fontFamily: {
      sans: ['system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      mono: [
        'ui-monospace',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe WPC',
        'Segoe UI',
        'HelveticaNeue-Light',
        'Ubuntu',
        'Droid Sans',
        'sans-serif',
      ],
    },
    extend: {
      minWidth: {
        '1/3': '33%',
      },
      gridTemplateRows: {
        editor: 'min-content 1fr',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
