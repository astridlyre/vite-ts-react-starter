import { style } from '@vanilla-extract/css'
import { vars, themed } from '../theme'

export const rootStyle = style([
  {
    display: 'flex',
    padding: vars.spacing.s5,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: vars.size.h6,
  },
  themed({
    lightMode: {
      color: vars.color.red800,
    },
    darkMode: {
      color: vars.color.red300,
    },
  }),
])

export const buttonStyle = style([
  {
    padding: vars.spacing.r4,
    borderRadius: vars.spacing.s1,
    border: 'none',
  },
  themed({
    lightMode: {
      background: vars.color.gray700,
    },
    darkMode: {
      background: vars.color.gray900,
    },
  }),
])
