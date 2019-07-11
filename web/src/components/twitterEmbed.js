import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed'

const Tweet = ({node: {url, title}}) => {
  const exp = /\/status\/(\d+)($|[?/])/
  const [, id] = exp.exec(url) || []
  if (id) {
    return <>
      <TwitterTweetEmbed className='sliderBoxes' tweetId={id} options={{conversation: 'none', 'hide-thread': true}} />
      {title && (<small>{title}</small>)}
      </>
  }
  return <React.Fragment />
}


export default Tweet
