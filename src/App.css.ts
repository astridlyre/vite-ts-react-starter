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
    darkMode: 'gray-450',
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
    lightMode: 'gray-050',
    darkMode: 'gray-850',
  },
})

export const linkStyle = sprinkles({
  color: {
    lightMode: 'blue-500',
    darkMode: 'blue-500',
    hoverLight: 'blue-700',
    hoverDark: 'blue-400',
    visitedDark: 'purple-400',
    visitedLight: 'purple-600',
    visitedHoverDark: 'purple-300',
    visitedHoverLight: 'purple-800',
  },
  transition: 'short',
})
