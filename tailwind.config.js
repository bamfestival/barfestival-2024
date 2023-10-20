/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: [],
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
        
      }
  },
  plugins: [
    require(`@tailwindcss/typography`),
  ],
}
}