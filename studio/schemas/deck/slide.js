export default {
  name: 'slide',
  title: 'Slide',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'background',
      type: 'background',
      title: 'Background'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'notes',
      type: 'array',
      title: 'Notes',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
