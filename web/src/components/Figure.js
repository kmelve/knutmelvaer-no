import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import css from './Figure.module.css'

export default ({node}) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    {maxWidth: 675},
    ...clientConfig.sanity
  )
  return (
    <figure className={css.root}>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
