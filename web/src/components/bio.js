import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import PortableText from './portableText'
import clientConfig from '../../client-config'
import css from './bio.module.css'

function Bio ({ author = {} }) {
  const {
    _id,
    _rawBio,
    image = {},
    name,
    url = 'https://www.knutmelvaer.no'
  } = author

  return (
    <StaticQuery
      query={graphql`
        {
          fallbackAuthor: sanityPerson(slug: { current: { eq: "knut-melvaer" } }) {
            _id
            url
            _rawBio
            image {
              ...SanityImage
              alt
              caption
            }
          }
        }
      `}
      render={({ fallbackAuthor }) => {
        const fluidProps = getFluidGatsbyImage(
          (image.asset || {})._id || fallbackAuthor.image.asset._id,
          { width: 100, height: 100 },
          ...clientConfig.sanity
        )
        return (
          <div key={_id || fallbackAuthor._id} className="p-author h-card">
            <a
              href={url || fallbackAuthor.url}
              className={css.hidden + ' u-url p-name'}
            >
              {name || fallbackAuthor.name}
            </a>
            <figure className={css.figure}>
              <Img
                fluid={fluidProps}
                alt={image.alt || fallbackAuthor.image.alt}
                className={css.img + ' u-photo'}
              />
              <figcaption className={css.figcaption}>
                <PortableText
                  className="p-note"
                  blocks={_rawBio || fallbackAuthor._rawBio}
                />
              </figcaption>
            </figure>
          </div>
        )
      }}
    />
  )
}

export default Bio
