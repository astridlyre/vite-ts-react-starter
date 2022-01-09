import { style } from '@vanilla-extract/css'
import { vars, themed, responsive } from './theme'

export const headingStyle = style([
  {
    marginTop: vars.spacing.s9,
    fontSize: vars.size.h1,
    fontFamily: vars.font.accent,
  },
  themed({
    lightMode: {
      color: vars.color.gray900,
    },
    darkMode: {
      color: vars.color.gray100,
    },
  }),
])

export const paraStyle = style([
  {
    fontFamily: vars.font.default,
    fontSize: vars.size.h6,
    maxWidth: vars.lineLength.sm,
  },
  themed({
    lightMode: {
      color: vars.color.gray650,
    },
    darkMode: {
      color: vars.color.gray450,
    },
  }),
])

export const container = style([
  {
    minHeight: '100vh',
    fontFamily: 'default',
    display: 'flex',
    paddingLeft: vars.spacing.s4,
    paddingRight: vars.spacing.s4,
    flexDirection: 'column',
    alignItems: 'center',
  },
  themed({
    lightMode: {
      background: vars.color.gray050,
    },
    darkMode: {
      background: vars.color.gray850,
    },
  }),
])

export const linkStyle = style([
  themed({
    lightMode: {
      color: vars.color.blue500,
      ':hover': {
        color: vars.color.blue700,
      },
      ':visited': {
        color: vars.color.purple800,
      },
    },
    darkMode: {
      color: vars.color.blue500,
      ':hover': {
        color: vars.color.blue400,
      },
      ':visited': {
        color: vars.color.purple300,
      },
    },
  }),
  responsive({
    mobile: {
      color: vars.color.red600,
    },
  }),
])
