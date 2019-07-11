import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import css from './Figure.module.css'

export default ({node}) => {
  if (node.asset.mimeType === "image/gif")
  {
    return (<figure className={css.root}>
      <img src={node.asset.url} alt={node.alt} />
      <figcaption className={css.figcaption}>{node.caption}</figcaption>
    </figure>)
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    {maxWidth: 675},
    ...clientConfig.sanity
  )
  return (
    <figure className={css.root}>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption className={css.figcaption}>{node.caption}</figcaption>
    </figure>
  )
}
