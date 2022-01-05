import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Theme } from './Theme/Theme'

render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
  document.getElementById('root'),
)
