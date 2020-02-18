import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
//import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './code.module.css'

function Code ({ node }) {
  if(!node.code) {
    return undefined
  }
  return (
    <div className={styles.container}>
      <SyntaxHighlighter language={node.language || 'text'} wrapLines>
        {node.code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
