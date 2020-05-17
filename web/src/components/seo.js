import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import SchemaOrg from './SchemaOrg'

function SEO ({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
  type,
  publishedAt,
  url
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        const siteAuthor =
          (data.site && data.site.author && data.site.author.name) || ''
        const siteUrl =
          (data.site && data.site.url) || 'https://www.knutmelvaer.no/'

        const ogUrl = url || siteUrl
        const isBlogPost = /.*\/blog\//.test(ogUrl)

        const ogImage = image ||
        'https://cdn.sanity.io/images/ndjrels0/production/46f420efe0408caaf07eb2c4e6989323001f080f-1200x802.jpg'

        return (
          <>
            <Helmet
              htmlAttributes={{
                lang,
                prefix: 'og: http://ogp.me/ns#'
              }}
            >
              {/* General tags */}
              <title>{title === siteTitle ? siteTitle : `${title} | ${siteTitle}`}</title>
              <meta name='description' content={metaDescription} />
              <link
                rel='icon'
                id='favicon'
                href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👀</text></svg>'
              />
              <meta
                name='image'
                content={ogImage}
              />
              <link
                rel='canonical'
                href={ogUrl}
              />

              {/* OpenGraph tags */}
              <meta
                property='og:url'
                content={ogUrl}
              />
              {isBlogPost ? <meta property='og:type' content='article' /> : null}
              <meta property='og:title' content={title} />
              <meta property='og:description' content={metaDescription} />
              <meta
                property='og:image'
                content={ogImage}
              />
              <meta name='author' content='Knut Melvær' />

              {/* Twitter Card tags */}
              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:creator' content={siteAuthor} />
              <meta name='twitter:title' content={title} />
              ame='twitter:description' content={metaDescription} />
              <meta
                name='twitter:image'
                content={ogImage}
              />
              {keywords &&
                keywords.length > 0 && (<meta name='keywords' content={keywords.join(', ')} />
              )}
            </Helmet>
            <SchemaOrg
              isBlogPost={isBlogPost}
              url={ogUrl}
              title={title}
              image={ogImage}
              description={metaDescription}
              datePublished={publishedAt}
              siteUrl={siteUrl}
              author={siteAuthor}
              organization={siteAuthor}
              defaultTitle={siteTitle}
            />
          </>
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
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
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
