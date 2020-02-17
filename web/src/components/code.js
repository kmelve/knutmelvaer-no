import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
//import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Code ({ node }) {
  if(!node.code) {
    return undefined
  }
  return (
    <SyntaxHighlighter language={node.language || 'text'} wrapLines>
      {node.code}
    </SyntaxHighlighter>
  )
}

export default Code
