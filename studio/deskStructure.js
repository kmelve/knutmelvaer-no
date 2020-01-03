import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import {path} from './schemas/documents/post'
import QueryContainer from 'part:@sanity/base/query-container'
import DiffViewer from './src/DiffViewer'
import Spinner from 'part:@sanity/components/loading/spinner'
import Snackbar from 'part:@sanity/components/snackbar/default'
import ReferringDocumentsLists from './src/ReferringDocumentsLists'
const query = `//groq
 *[references($id)]
`
const Incoming = ({document}) => (
  <QueryContainer query={query} params={{id: document.displayed._id}}>
    {({result, loading, error, onRetry}) => {
      console.log(result)
      if (error) {
        return (
          <Snackbar
            kind='error'
            isPersisted
            actionTitle='Retry'
            onAction={onRetry}
            title='An error occurred while loading items:'
            subtitle={<div>{error.message}</div>}
          />
        )
      }

      if (loading) {
        return (
          <div>
            {loading && <Spinner center message='Loading items…' />}
          </div>
        )
      }

      if (!result) {
        return null
      }

      return (
        <div>
          {result && (
            <ReferringDocumentsLists documents={result.documents} />
          )}
        </div>
      )
    }}
  </QueryContainer>
)

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Blog posts')
            .child(documentId =>
              S.document()
                .schemaType('post')
                .documentId(documentId)
                .views([
                  S.view.form(),
                  S.view
                    .component(({
                      document: {
                        displayed: {
                          publishedAt, slug
                        } = {}
                      } = {}
                    }) => {
                      return (
                        <iframe
                          style={{
                            width: '100%',
                            height: '100%'
                          }}
                          frameBorder='0'
                          src={`https://knutmelvaer-no-v2-3373152487.gtsb.io/blog${path(
                            {publishedAt, slug}
                          )}`}
                        />
                      )
                    })
                    .title('Gatsby Preview')
                ])
            )
        ),
      S.listItem()
        .title('Persons')
        .icon(MdPerson)
        .schemaType('person')
        .child(S.documentTypeList('person').title('Persons')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
