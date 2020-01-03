import userDatastore from 'part:@sanity/base/user'
import S from '@sanity/desk-tool/structure-builder'
import {
  map,
  filter
} from 'rxjs/operators'

function getCurrentUserObservable () {
  console.log(userDatastore.currentUser.subscribe(item => console.log(item)))
  return userDatastore.currentUser.pipe(
    filter(event => event.type === 'snapshot'),
    map(({user}) => user)
  )
}

export default () =>
  getCurrentUserObservable()
    .pipe(
      filter(Boolean),
      map(user =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Posts by: ' + user.name)
              .child(
                S.documentList()
                  .title('Posts by: ' + user.name)
                  .filter("_type == 'post' && $name in authors[].person->name")
                  .params({name: user.name})
              ),
            S.listItem()
              .title('Guest posts')
              .child(
                S.documentList()
                  .title('Posts by: ' + user.name)
                  .filter("_type == 'post' && !($name in authors[].person->name)")
                  .params({name: user.name})
              )])
      )
    )
