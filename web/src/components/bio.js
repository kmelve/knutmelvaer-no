import React, {Fragment} from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import PortableText from './portableText'
import clientConfig from '../../client-config'
import css from './bio.module.css'

function Bio ({author}) {
  const {_id, _rawBio, image, name, url = 'https://www.knutmelvaer.no'} = author
    const fluidProps = getFluidGatsbyImage(
      image.asset._id,
      {width: 100, height: 100},
      ...clientConfig.sanity
    )
  return (<div key={_id} className="p-author h-card">
    <a href={url} className={css.hidden + " u-url p-name"}>{name}</a>
    <figure className={css.figure}>
      <Img fluid={fluidProps} alt={image.alt} className={css.img + " u-photo"} />
      <figcaption className={css.figcaption}>
        <PortableText className="p-note" blocks={_rawBio} />
      </figcaption>
    </figure>
  </div>)
}

export default Bio
