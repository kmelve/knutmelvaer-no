import React from 'react'
import ReactDiffViewer from '@rexxars/react-diff-viewer'

export default ({document}) => {
  const {displayed, draft, published} = document
  return <ReactDiffViewer oldValue={JSON.stringify(published || draft, null, 2)} newValue={JSON.stringify(displayed, null, 2)} />
}
