import React from 'react'

export default {
  name: 'footnote',
  type: 'object',
  title: 'Footnote',
  icon:  () => '🦶',
  fields: [
    {
      name: 'text',
      type: 'excerptPortableText',
    }
  ]
}
