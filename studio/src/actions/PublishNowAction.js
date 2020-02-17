import {useDocumentOperation} from '@sanity/react-hooks'

export function PublishNowAction ({type, id, onComplete}) {
  const {publish, patch} = useDocumentOperation(id, type)

  return {
    label: 'Publish now',
    icon: () => '🚀',
    onHandle: () => {
      patch.execute([{
        set: {
          publishedAt: new Date().toISOString()
        }
      },
      {
        set: {
          description: 'hi'
        }
      }])
      publish.execute()
      onComplete()
    }
  }
}
