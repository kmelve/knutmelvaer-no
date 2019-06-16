import React, {Fragment} from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import PortableText from './portableText'
import clientConfig from '../../client-config'
import css from './bio.module.css'

function Bio ({author}) {
  const {_rawBio, image} = author
  const fluidProps = getFluidGatsbyImage(
    image.asset._id,
    {width: 100, height: 100},
    ...clientConfig.sanity
  )
  return (<Fragment>
    <figure className={css.figure}>
      <Img fluid={fluidProps} alt={image.alt} className={css.img} />
      <figcaption className={css.figcaption}>
        <PortableText blocks={_rawBio} />
      </figcaption>
    </figure>
  </Fragment>)
}

export default Bio
