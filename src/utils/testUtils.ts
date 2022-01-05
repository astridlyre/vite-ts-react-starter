import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ReactElement } from 'react'

function customRender(ui: ReactElement, options = {}) {
  return render(ui, {
    // Wrap provider here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render } // override render export
