import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTubeEmbed from 'react-youtube'
import css from './youtube.module.css'

const YouTube = ({node}) => {
  const {url} = node
  const id = getYouTubeId(url)
  return (<YouTubeEmbed
    containerClassName={css.videoWrapper}
    videoId={id}
  />)
}

export default YouTube
