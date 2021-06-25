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
        code {
          white-space: pre-wrap;
        }

        code:before,
        code:after {
          content: '\`';
        }

        pre {
          border-radius: ${theme.layout.radius};
          padding: calc(${theme.layout.gap} * 0.75) ${theme.layout.gap};
          margin: ${theme.layout.gap} 0;
          white-space: pre;
          overflow: auto;
          line-height: 1.5;
          text-align: left;
          font-size: 0.875rem;
          -webkit-overflow-scrolling: touch;
        }

        pre code {
          font-size: 0.8125rem;
          line-height: 1.25rem;
          white-space: pre;
        }

        pre code:before,
        pre code:after {
          display: none;
        }

        pre :global(p) {
          margin: 0;
        }

        pre::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }

        details {
          border: none;
        }

        details:focus,
        details:hover,
        details:active {
          outline: none;
        }

        summary {
          cursor: pointer;
          user-select: none;
          list-style: none;
          outline: none;
        }

        summary::marker,
        summary::before {
          display: none;
        }

        summary::-moz-list-bullet {
          font-size: 0;
        }

        summary:focus,
        summary:hover,
        summary:active {
          outline: none;
          list-style: none;
        }

        blockquote {
          padding: calc(0.667 * ${theme.layout.gap}) ${theme.layout.gap};
          border-radius: ${theme.layout.radius};
          margin: 1.5rem 0;
        }

        blockquote :global(*:first-child) {
          margin-top: 0;
        }

        blockquote :global(*:last-child) {
          margin-bottom: 0;
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