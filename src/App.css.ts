import { style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'
import { vars, themed } from './theme'

export const headingStyle = sprinkles({
  marginTop: 'spacer9',
  fontSize: 'h1',
  color: {
    lightMode: 'gray900',
    darkMode: 'gray100',
  },
  fontFamily: 'accent',
})

export const paraStyle = sprinkles({
  color: {
    lightMode: 'gray650',
    darkMode: 'gray450',
  },
  fontFamily: 'default',
  fontSize: 'h6',
  maxWidth: 'readableLineLengthSm',
})

export const container = sprinkles({
  minHeight: '100vh',
  fontFamily: 'default',
  display: 'flex',
  paddingX: 'spacer4',
  flexDirection: 'column',
  alignItems: 'center',
  background: {
    lightMode: 'gray050',
    darkMode: 'gray850',
  },
})

export const linkStyle = style([
  sprinkles({
    color: {
      lightMode: 'blue500',
      darkMode: 'blue500',
    },
    transition: 'short',
  }),
  themed({
    lightMode: {
      ':hover': {
        color: vars.colors.blue700,
      },
      ':visited': {
        color: vars.colors.purple800,
      },
    },
    darkMode: {
      ':hover': {
        color: vars.colors.blue400,
      },
      ':visited': {
        color: vars.colors.purple300,
      },
    },
  }),
])
