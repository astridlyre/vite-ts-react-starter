import { createTheme } from '@vanilla-extract/css'

export const [theme, vars] = createTheme({
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
