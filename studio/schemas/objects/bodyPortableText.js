// portableText.js
export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'footnote',
            type: 'object',
            title: 'Footnote',
            fields: [
              {
                type: 'excerptPortableText',
                name: 'text'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'post'}
                  // other types you may want to link to
                ]
              }
            ]
          },
          {
            name: 'link',
            type: 'object',
            title: 'External link',
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
    },
    {
      type: 'mainImage'
    },
    {
      type: 'code'
    },
    {
      type: 'twitter'
    },
    {
      type: 'codepen'
    }
  ]
}
