const PortableText‚ {h} = require('@sanity/block-content-to-html')
const {
  getBlogUrl,
  filterOutDocsPublishedInTheFuture
} = require('./nodeHelpers.js')

const imageUrlFor = source => imageUrlBuilder(clientConfig.sanity).image(source)

const rssFeed = {
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          site_url: siteUrl
        }
      }
    }
    `,
    feeds: [
      {
        serialize: ({query: {site, allSanityPost = []}}) => {
          return allSanityPost.edges
            .filter(({node}) => node.publishedAt)
            .filter(({node}) => filterOutDocsPublishedInTheFuture(node))
            .filter(({node}) => node.slug)
            .map(({node}) => {
              const {title, publishedAt, slug, _rawBody} = node
              const url =
                site.siteMetadata.siteUrl +
                getBlogUrl(publishedAt, slug.current)
              return {
                title: title,
                date: publishedAt,
                url,
                guid: url,
                custom_elements: [
                  {
                    'content:encoded': {
                      _cdata: PortableText({
                        blocks: _rawBody,
                        serializers: {
                          marks: {
                            internalLink: ({mark, children}) => {
                              const {
                                publishedAt,
                                slug,
                                _type
                              } = mark.reference
                              if (_type === 'post') {
                                const path = getBlogUrl(publishedAt, slug)
                                return h(
                                  'a',
                                  {
                                    href: `https://www.knutmelvaer.no/${
                                      path
                                    }`
                                  },
                                  children
                                )
                              }
                              console.log(
                                'Unknown internal link type ',
                                mark.reference
                              )
                              return h('span', {}, children)
                            }
                          },
                          types: {
                            youtube: ({node}) =>
                              h(
                                'p',
                                {},
                                h('a', {
                                  href: node.url,
                                  innerHTML: 'Watch on Youtube.'
                                })
                              ),
                            code: ({node}) =>
                              h(
                                'pre',
                                h(
                                  'code',
                                  {lang: node.language},
                                  node.code
                                )
                              ),
                            mainImage: ({node}) =>
                              h('img', {
                                src: imageUrlFor(node.asset).url()
                              }),
                            twitter: ({node}) =>
                              h(
                                'p',
                                {},
                                h('a', {
                                  href: node.url,
                                  innerHTML: 'Look at the tweet.'
                                })
                              )
                          }
                        }
                      })
                    }
                  }
                ]
              }
            })
        },
        query: `{
          allSanityPost(sort: {fields: publishedAt, order: DESC}) {
            edges {
              node {
                _rawExcerpt
                _rawBody(resolveReferences: {maxDepth: 10})
                title
                publishedAt
                slug {
                  current
                }
              }
            }
          }
        }
        `,
        output: '/rss.xml',
        title: 'Knut Melvær'
        // optional configuration to insert feed reference in pages:
        // if `string` is used, it will be used to create RegExp and then test if pathname of
        // current page satisfied this regular expression;
        // if not provided or `undefined`, all pages will have feed reference inserted
      }
    ]
  }
}

module.exports = rssFeed
