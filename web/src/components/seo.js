import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

function SEO ({description, lang, meta, keywords, title, image, type, slug = {}}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || ''
        const siteUrl = (data.site && data.site.url) || 'https://www.knutmelvaer.no/'
        const { current: pageSlug } = slug
        return (
          <Helmet
            htmlAttributes={{
              lang,
              prefix: "og: http://ogp.me/ns#"
            }}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:url',
                content: pageSlug ? `${siteUrl}/${pageSlug}` : siteUrl
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:image',
                content: image || 'https://cdn.sanity.io/images/ndjrels0/production/46f420efe0408caaf07eb2c4e6989323001f080f-1200x802.jpg'
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: type || 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteAuthor
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
      description
      url
      keywords
      author {
        name
      }
    }
  }
`
