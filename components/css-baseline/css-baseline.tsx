import React from 'react'
import useTheme from '../use-theme'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const theme = useTheme()

  return (
    <>
      {children}
      <style global jsx>{`
        ::selection {
          background-color: ${theme.palette.selection};
          color: ${theme.palette.foreground};
        }
      `}</style>
    </>
  )
}

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact
}

const MemoCssBaseline = React.memo(CssBaseline) as MemoCssBaselineComponent<
  React.PropsWithChildren<unknown>
>
MemoCssBaseline.flush = flush

export default MemoCssBaseline
