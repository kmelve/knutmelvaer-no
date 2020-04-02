// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions'

import {PublishNowAction} from './src/actions/PublishNowAction'

export default function resolveDocumentActions (props) {
  const {type} = props
  if (type === 'post') {
    return [
      ...defaultResolve(props),
      PublishNowAction
    ]
  }
  const actions = [
    ...defaultResolve(props)
  ]

  return actions
}
