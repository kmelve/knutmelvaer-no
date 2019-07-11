import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed'

const Tweet = ({value: {url}}) => {
  const exp = /\/status\/(\d+)($|[?/])/
  const [, id] = exp.exec(url) || []
  if (id) {
    return <TwitterTweetEmbed className='sliderBoxes' tweetId={id} options={{conversation: 'none', 'hide-thread': true}} />
  }
  return <React.Fragment />
}

export default {
  type: 'object',
  name: 'twitter',
  title: 'Twitter',
  description: 'Twitter embed',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      title: 'Twitter URL',
      name: 'url',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'service',
      url: 'url'
    },
    component: Tweet
  }
}
