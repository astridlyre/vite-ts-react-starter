import { paraStyle, container, headingStyle, linkStyle } from './App.css'
import { useCat } from './hooks/useCat'

export function App() {
  const { data } = useCat()

  return (
    <div className={container}>
      <main>
        <h1 className={headingStyle}>Hello, World!</h1>
        <p className={paraStyle}>
          This is a{' '}
          <a className={linkStyle} href='https://www.reactjs.org'>
            React
          </a>{' '}
          starter project, powered by{' '}
          <a className={linkStyle} href='https://www.vitejs.dev'>
            Vite
          </a>
          . The CSS is pre-built with{' '}
          <a className={linkStyle} href='https://vanilla-extract.style'>
            vanilla-extract
          </a>
          .
        </p>
        <p className={paraStyle}>
          Your cat fact of the day is:{' '}
          <q>
            <em>{data?.fact}</em>
          </q>
        </p>
      </main>
    </div>
  )
}
