import { style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'

// Mix in sprinkles with a style using an array
export const appStyle = style([
  sprinkles({
    padding: 'small',
    color: {
      lightMode: 'gray-900',
      darkMode: 'blue-50',
    },
  }),
  {
    fontSize: '4rem',
    textAlign: 'center',
  },
])

export const container = sprinkles({
  display: 'flex',
  paddingX: 'small',
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
  background: {
    lightMode: 'blue-50',
    darkMode: 'gray-700',
  },
  minHeight: '100vh',
})
