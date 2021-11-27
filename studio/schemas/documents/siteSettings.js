export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Site URL'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{ type: 'person' }]
    },
    {
      name: 'resources',
      type: 'array',
      title: 'Resources',
      of: [
        {
          type: 'object',
          name: 'resource',
          fields: [
            {
              name: 'text',
              type: 'string'
            },
            {
              name: 'internalLink',
              type: 'object',
              title: 'Internal link',
              hidden: ({ parent, value }) => !value && parent.link,
              fields: [
                {
                  name: 'reference',
                  type: 'reference',
                  title: 'Reference',
                  to: [
                    { type: 'post' }
                    // other types you may want to link to
                  ]
                }
              ]
            },
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              hidden: ({ parent, value }) => !value && parent.internalLink,
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                }
              ]
            }
          ]
        }

      ]
    }
  ]
}
