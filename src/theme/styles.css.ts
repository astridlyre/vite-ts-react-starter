import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  colors: {
    'gray-950': '#050608',
    'gray-900': '#0f1217',
    'gray-850': '#1a1e26',
    'gray-800': '#242b35',
    'gray-750': '#2e3744',
    'gray-700': '#394354',
    'gray-650': '#434f63',
    'gray-600': '#4d5b72',
    'gray-550': '#586881',
    'gray-500': '#627490',
    'gray-450': '#6f819d',
    'gray-400': '#7e8ea7',
    'gray-350': '#8d9bb2',
    'gray-300': '#9ca8bc',
    'gray-250': '#abb6c6',
    'gray-200': '#bbc3d1',
    'gray-150': '#cad0db',
    'gray-100': '#d9dee5',
    'gray-050': '#e8ebf0',
    'gray-000': '#f7f8fa',
    white: '#fff',
    black: '#000',
    'red-900': '#6d120a',
    'red-800': '#8c170d',
    'red-700': '#ab1c10',
    'red-600': '#ca2113',
    'red-500': '#e92716',
    'red-400': '#ec4335',
    'red-300': '#ef6054',
    'red-200': '#f27d73',
    'red-100': '#f59a92',
    'red-000': '#f8b7b1',
    'green-900': '#1a5d24',
    'green-800': '#21782f',
    'green-700': '#289339',
    'green-600': '#2fae44',
    'green-500': '#37c84e',
    'green-400': '#51d066',
    'green-300': '#6cd77d',
    'green-200': '#87de95',
    'green-100': '#a2e5ac',
    'green-000': '#bcedc4',
    'blue-900': '#264073',
    'blue-800': '#2f4e8c',
    'blue-700': '#375ca6',
    'blue-600': '#406abf',
    'blue-500': '#597ec8',
    'blue-400': '#7392d0',
    'blue-300': '#8ca6d9',
    'blue-200': '#a6bae1',
    'blue-100': '#bfcdea',
    'blue-000': '#d9e1f2',
    'purple-900': '#4c3762',
    'purple-800': '#5d4378',
    'purple-700': '#6e4f8e',
    'purple-600': '#7f5ba4',
    'purple-500': '#9071b0',
    'purple-400': '#a187bc',
    'purple-300': '#b29dc8',
    'purple-200': '#c3b2d4',
    'purple-100': '#d4c8e1',
    'purple-000': '#e6deed',
  },
  spacing: {
    'spacer-0': '0px',
    'spacer-1': '4px',
    'spacer-2': '8px',
    'spacer-3': '16px',
    'spacer-4': '24px',
    'spacer-5': '32px',
    'spacer-6': '40px',
    'spacer-7': '48px',
    'spacer-8': '64px',
    'spacer-9': '80px',
    'spacer-10': '96px',
    'spacer-11': '112px',
    'spacer-12': '128px',
    'r-spacer-1': '0.0625rem',
    'r-spacer-2': '0.125rem',
    'r-spacer-3': '0.25rem',
    'r-spacer-4': '0.375rem',
    'r-spacer-5': '0.5rem',
    'r-spacer-6': '0.75rem',
    'readable-line-length-lg': '72ch',
    'readable-line-length-md': '60ch',
    'readable-line-length-sm': '48ch',
  },
  size: {
    xs: '0.64rem',
    sm: '0.8rem',
    base: '1rem',
    h6: '1.25rem',
    h5: '1.563rem',
    h4: '1.953rem',
    h3: '2.441rem',
    h2: '3.052rem',
    h1: '3.815rem',
  },
  boxShadow: {
    xs: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
    sm: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
    md: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
    lg: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    xl: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '2xl':
      'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    '3xl': 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
    inset: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
  },
  font: {
    accent: 'Fraunces, Georgia, serif',
    default:
      '"Commissioner", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  },
  border: {
    none: 'none',
    sm: '1px solid transparent',
    md: '2px solid transparent',
    lg: '4px solid transparent',
  },
})
