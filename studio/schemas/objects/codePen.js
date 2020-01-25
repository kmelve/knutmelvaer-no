import React from 'react'
import Codepen from 'react-codepen-embed'

const Preview = ({value}) => {
  const {url, height, view, themeID} = value
  const [protocol, , host, user,, hash] = url.split('/')
  // return <pre>{JSON.stringify(splitUrl, null, 2)}</pre>
  return <Codepen height={height} hash={hash} user={user} themeId={themeID} />
}

export default {
  name: 'codepen',
  type: 'object',
  title: 'Codepen embed',
  preview: {
    select: {
      url: 'url',
      height: 'height',
      themeId: 'themeId',
      view: 'view'
    },
    component: Preview
  },
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'CodePen URL'
    },
    {
      name: 'height',
      type: 'number',
      title: 'Pen Height',
      description: 'In pixels'
    },
    {
      name: 'themeId',
      type: 'string',
      title: 'Pen Theme ID',
      description: 'You can use "light" and "dark" also'
    },
    {
      name: 'view',
      type: 'string',
      title: 'Pen View',
      options: {
        list: [
          {title: 'Result only', value: 'result'}
        ]
      }
    }
  ]
}
