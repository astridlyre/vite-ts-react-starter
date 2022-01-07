import { ReactNode } from 'react'
import { themeClass, vars } from './styles.css'

type ThemeProps = {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <div className={themeClass}>{children}</div>
}

export { vars }
