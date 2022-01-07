import { sprinkles } from 'sprinkles.css'

export const rootStyle = sprinkles({
  display: 'flex',
  padding: 'spacer5',
  flexDirection: 'column',
  placeItems: 'center',
  color: {
    lightMode: 'red800',
    darkMode: 'red300',
  },
  background: {
    lightMode: 'gray100',
    darkMode: 'gray700',
  },
  fontSize: 'h6',
})

export const buttonStyle = sprinkles({
  padding: 'rspacer4',
  borderRadius: 'spacer1',
  border: 'none',
  background: {
    lightMode: 'gray700',
    darkMode: 'gray200',
  },
  color: {
    lightMode: 'gray900',
    darkMode: 'gray900',
  },
})
