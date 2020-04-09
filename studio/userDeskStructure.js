import S from '@sanity/base/structure-builder'
import userStore from 'part:@sanity/base/user'

import {
  map
} from 'rxjs/operators'

export default () => {
  return userStore.currentUser.pipe(
    map(({user}) => {
      const {role} = user
      if (role === 'administrator') {
        return S.list().title('Admin structure')
      }
      return S.list().title('Editor structure')
    })
  )
}
