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
      name: 'language',
      type: 'string'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'presentationType',
      type: 'string',
      title: 'Presentation type',
      options: {
        list: [
          {value: 'workshop', title: 'Workshop'},
          {value: 'talk', title: 'Talk'},
          {value: 'course', title: 'Course'},
          {value: 'panel', title: 'Panel'},
          {value: 'podcast', title: 'Podcast'}
        ]
      }
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
