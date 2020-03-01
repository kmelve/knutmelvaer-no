import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTubeEmbed from 'react-youtube'

const YouTube = ({node}) => {
  const { url } = node
  const id = getYouTubeId(url)
  return (<YouTubeEmbed videoId={id} />)
}

export default YouTube
