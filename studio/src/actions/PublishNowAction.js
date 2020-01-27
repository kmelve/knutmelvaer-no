import {useDocumentOperation} from '@sanity/react-hooks'

export function PublishNowAction({type, id, onComplete}) {
  const {publish, patch} = useDocumentOperation(id, type)


  if (type !== 'post') {
    return null
  }
  return {
    label: 'Publish now',
    icon: () => '🚀',
    onHandle: () => {
      patch.execute([{
        set: {
          publishedAt: new Date().toISOString()
        }
      }])
      publish.execute()
      onComplete()
    }
  }
}
