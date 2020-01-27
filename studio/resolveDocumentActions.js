// import the default document actions
import * as defaultActions from 'part:@sanity/base/document-actions'

import {PublishNowAction} from './src/actions/PublishNowAction'

export default function resolveDocumentActions() {
  return [...Object.values(defaultActions), PublishNowAction]
}
