import { vars } from './Theme/Theme.css'
import { style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'

export const appStyle = style({
  fontSize: '4rem',
  padding: vars.space.small,
  textAlign: 'center',
})

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
  color: 'blue-50',
})
