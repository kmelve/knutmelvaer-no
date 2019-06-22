export default {
  name: 'publication',
  type: 'document',
  title: 'Publication',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'originalTitle',
      type: 'string'
    },
    {
      name: 'date',
      type: 'datetime'
    },
    {
      name: 'language',
      type: 'string'
    },
    {
      name: 'place',
      type: 'string'
    },
    {
      name: 'abstract',
      type: 'text'
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
      name: 'collaborators',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'person'}
          ]}
      ]
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
