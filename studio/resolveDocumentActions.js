// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions'

import {PublishNowAction} from './src/actions/PublishNowAction'

export default function resolveDocumentActions(props) {
  const {type} = props
  const actions = [
    ...defaultResolve(props),
    (type === "post" && PublishNowAction)
  ]
  debugger
  console.log(actions)
  return actions
}
