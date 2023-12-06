/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: [
    `~/components/**/*.{vue,js,ts}`,
    `~layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/composables/**/*.{js,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/App.{js,ts,vue}`,
    `~/app.{js,ts,vue}`,
    `~/Error.{js,ts,vue}`,
    `~/error.{js,ts,vue}`
  ],
  theme: {
    extend: {
      colors: {
        geel: '#ffd827',
        oranje: '#f4a240',
        roze: '#e31362',
        paars: '#8b1c66',
        lichtblauw: '#009de1',
        blauw: '#0080c7',
        donkerpaars: '5f2f86',
        donkerblauw: '#1e125e',
      },
      fontFamily: {
        heading: ['Interstate', 'sans-serif'],
        body: ['Merriweather Sans', 'sans-serif'],
        sans: ['Interstate', 'sans-serif'],
        serif: ['Merriweather Sans', 'serif'],
      }
  },
  plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
  ],
}
}