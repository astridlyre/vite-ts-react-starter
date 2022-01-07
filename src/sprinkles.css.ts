import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from './theme/styles.css'

const colors = vars.colors
const spacing = vars.spacing
const size = vars.size
const fontFamily = vars.font
const border = vars.border
const boxShadow = vars.boxShadow
const transition = vars.transitions

const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    mobile: { '@media': 'screen and (min-width: 544px)' },
    tablet: { '@media': 'screen and (min-width: 768px)' },
    laptop: { '@media': 'screen and (min-width: 1012px)' },
    desktop: { '@media': 'screen and (min-width: 1280px)' },
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' },
    disabled: { selector: '&:disabled' },
    visited: { selector: '&:visited' },
    visitedHover: { selector: '&:visited:hover' },
    visitedFocus: { selector: '&:visited:focus' },
    visitedActive: { selector: '&:visited:active' },
    visitedDisabled: { selector: '&:visited:disabled' },
    valid: { selector: '&:valid' },
    invalid: { selector: '&:invalid' },
  },
  defaultCondition: 'base',
  responsiveArray: ['base', 'mobile', 'tablet', 'laptop', 'desktop'],
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-block'],
    flexDirection: ['row', 'column'],
    flexFlow: ['row wrap', 'column wrap'],
    flexGrow: ['1', '0'],
    flexBasis: spacing,
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'spacing-around',
      'spacing-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    gap: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingInlineStart: spacing,
    paddingInlineEnd: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginInlineStart: spacing,
    marginInlineEnd: spacing,
    marginRight: spacing,
    marginLeft: spacing,
    top: spacing,
    bottom: spacing,
    left: spacing,
    right: spacing,
    border,
    borderRadius: spacing,
    fontSize: size,
    fontFamily,
    boxShadow,
    minHeight: ['100vh'],
    maxWidth: spacing,
    maxHegith: spacing,
    transition,
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingInlineStart',
      'paddingInlineEnd',
    ],
    paddingX: ['paddingInlineStart', 'paddingInlineEnd'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: [
      'marginTop',
      'marginBottom',
      'marginInlineStart',
      'marginInlineEnd',
    ],
    marginX: ['marginInlineStart', 'marginInlineEnd'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const light = { '@media': '(prefers-color-scheme: light)' }
const dark = { '@media': '(prefers-color-scheme: dark)' }

const colorProperties = defineProperties({
  conditions: {
    lightMode: light,
    darkMode: dark,
    hoverLight: { ...light, selector: '&:hover' },
    hoverDark: { ...dark, selector: '&:hover' },
    focusLight: { ...light, selector: '&:focus' },
    focusDark: { ...dark, selector: '&:focus' },
    activeLight: { ...light, selector: '&:active' },
    activeDark: { ...dark, selector: '&:active' },
    disabledLight: { ...light, selector: '&:disabled' },
    disabledDark: { ...dark, selector: '&:disabled' },
    visitedLight: { ...light, selector: '&:visited' },
    visitedDark: { ...dark, selector: '&:visited' },
    visitedHoverLight: { ...light, selector: '&:visited:hover' },
    visitedHoverDark: { ...dark, selector: '&:visited:hover' },
    visitedFocusLight: { ...light, selector: '&:visited:focus' },
    visitedFocusDark: { ...dark, selector: '&:visited:focus' },
    visitedActiveLight: { ...light, selector: '&:visited:active' },
    visitedActiveDark: { ...dark, selector: '&:visited:active' },
    visitedDisabledLight: { ...light, selector: '&:visited:disabled' },
    visitedDisabledDark: { ...dark, selector: '&:visited:disabled' },
    validLight: { ...light, selector: '&:valid' },
    validDark: { ...dark, selector: '&:valid' },
    invalidLight: { ...light, selector: '&:invalid' },
    invalidDark: { ...dark, selector: '&:invalid' },
  },
  defaultCondition: false,
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
    outlineColor: colors,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
