/* eslint-disable no-unused-vars, no-duplicate-imports */
import { ReactNode } from 'react'
import { ErrorBoundary, FallbackProps } from './ErrorBoundary'
import { rootStyle, buttonStyle } from './styles.css'

export {
  withErrorBoundary,
  useErrorHandler,
  ErrorBoundary,
} from './ErrorBoundary'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role='alert' className={rootStyle}>
      <div>
        <p>Whoops, something went wrong!</p>
        <pre>{error.message}</pre>
        <button className={buttonStyle} onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    </div>
  )
}

type ErrorBoundaryWithFallbackProps = {
  children: ReactNode
  onReset?: (...args: Array<unknown>) => void
}

// Reset application state with the onReset function
export function ErrorBoundaryWithFallback({
  children,
  onReset,
}: ErrorBoundaryWithFallbackProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  )
}
