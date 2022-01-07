import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { ErrorBoundaryWithFallback } from './errors'

render(
  <StrictMode>
    <ErrorBoundaryWithFallback>
      <App />
    </ErrorBoundaryWithFallback>
  </StrictMode>,
  document.getElementById('root'),
)
