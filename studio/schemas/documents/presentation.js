export default {
  name: 'presentation',
  type: 'document',
  title: 'Presentation',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'date',
      type: 'datetime'
    },
    {
      name: 'place',
      type: 'string'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'link',
      type: 'url'
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    }
  ]
}
