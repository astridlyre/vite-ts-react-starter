import { StyleRule } from '@vanilla-extract/css'
import { StyleWithSelectors } from '@vanilla-extract/css/dist/declarations/src/types'
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

export interface IResponsiveOptions {
  mobile?: StyleRule
  tablet?: StyleRule
  laptop?: StyleRule
  desktop?: StyleRule
}

type BreakpointsType = {
  [key: string]: string
}

const breakpoints: BreakpointsType = {
  mobile: 'screen and (min-width: 544px)',
  tablet: 'screen and (min-width: 768px)',
  laptop: 'screen and (min-width: 1012px)',
  desktop: 'screen and (min-width: 1280px)',
}

export const responsive = (options: IResponsiveOptions): StyleRule => ({
  '@media': {
    ...Object.entries(options).reduce(
      (result, [key, value]) => (
        (result[breakpoints[key] as string] = value), result
      ),
      {} as { [key: string]: StyleWithSelectors },
    ),
  },
})
