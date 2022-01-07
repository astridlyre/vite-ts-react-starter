import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Theme } from './theme'

render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
  document.getElementById('root'),
)
