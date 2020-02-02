// import the default document actions
import {defaultActions} from 'part:@sanity/base/document-actions'

import {PublishNowAction} from './src/actions/PublishNowAction'

export default function resolveDocumentActions() {
  const actions = [...Object.values(defaultActions), PublishNowAction]
  return actions
}
