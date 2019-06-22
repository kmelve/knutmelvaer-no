// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: undefined, // webmention.io username
        identity: {
          github: 'kmelve',
          twitter: 'kmelve' // no @
        },
        mentions: true,
        pingbacks: false,
        forwardPingbacksAsWebmentions: 'https://example.com/endpoint',
        domain: 'knutmelvaer.no',
        token: process.env.WEBMENTIONS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site: sanitySiteSettings {
            title
            description
            siteUrl: url
          }
        }
        `,
        feeds: [
          {
            serialize: ({query: {site, allSanityPost}}) => {
              return allSanityPost.edges.map(edge => {
                return {
                  title: edge.node.title,
                  date: edge.node.publishedAt,
                  url: site.siteUrl + edge.node.slug.current,
                  guid: site.siteUrl + edge.node.slug.current
                  /* custom_elements: [{ "content:encoded": edge.node.html }], */

                }
              })
            },
            query: `{
              allSanityPost(sort: {fields: publishedAt, order: DESC}) {
                edges {
                  node {
                    _rawExcerpt
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
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/'
          }
        ]
      }
    }
  ]
}
