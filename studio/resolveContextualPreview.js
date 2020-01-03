import React from 'react'

const PREVIEW_TYPES = ['post']
const PREVIEWS = [
  {
    name: 'example-com',
    title: 'Example.com',
    url: 'https://example.com/posts'
  },
  {
    name: 'css-tricks',
    title: 'CSS Tricks',
    url: 'https://css-tricks.com/newsletters/'
  },
  {
    name: 'some-component',
    title: 'Some component preview',
    component: (
      <div>
        Some <strong>component</strong> preview
      </div>
    )
  }
]

export default function resolveContextualPreviews (document, rev) {
  if (!PREVIEW_TYPES.includes(document._type)) {
    return null
  }

  return PREVIEWS.map(item => {
    const url = `${item.url}/${document._id}`
    return {...item, url: rev ? `${url}?rev=${rev}` : url}
  })
}
