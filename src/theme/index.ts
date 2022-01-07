import { ComplexStyleRule, style } from '@vanilla-extract/css'

type ThemedFunctionType = {
  lightMode: ComplexStyleRule
  darkMode: ComplexStyleRule
}

export const themed = ({ lightMode, darkMode }: ThemedFunctionType) =>
  style({
    '@media': {
      '(prefers-color-scheme: dark)': darkMode,
      '(prefers-color-scheme: light)': lightMode,
    },
  } as ComplexStyleRule)

export { vars } from './styles.css'
