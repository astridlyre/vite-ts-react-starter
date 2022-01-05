import { style, createTheme } from '@vanilla-extract/css'

export const [appTheme, vars] = createTheme({
  color: {
    gray: '#282828',
  },
  space: {
    base: '0.32rem',
    small: '0.64rem',
    medium: '1.28rem',
    large: '2.52rem',
    xtra: '5.04rem',
  },
})

export const appStyle = style({
  color: vars.color.gray,
  padding: vars.space.medium,
})
