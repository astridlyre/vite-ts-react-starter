import { sprinkles } from './sprinkles.css'

export const headingStyle = sprinkles({
  marginTop: 'spacer-9',
  fontSize: 'h1',
  color: {
    lightMode: 'gray-900',
    darkMode: 'gray-100',
  },
  fontFamily: 'accent',
})

export const paraStyle = sprinkles({
  color: {
    lightMode: 'gray-650',
    darkMode: 'gray-500',
  },
  fontFamily: 'default',
  fontSize: 'h6',
  maxWidth: 'readable-line-length-sm',
})

export const container = sprinkles({
  minHeight: '100vh',
  fontFamily: 'default',
  display: 'flex',
  paddingX: 'spacer-4',
  flexDirection: 'column',
  alignItems: 'center',
  background: {
    lightMode: 'gray-100',
    darkMode: 'gray-800',
  },
})
