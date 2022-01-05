import { ReactNode } from 'react'
import { theme } from './Theme.css'

type ThemeProps = {
  children: ReactNode
}

export function Theme(props: ThemeProps) {
  return <div className={theme}>{props.children}</div>
}
