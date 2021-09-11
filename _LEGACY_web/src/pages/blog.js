import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes, filterOutDocsPublishedInTheFuture} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  const posts = postNodes.filter(filterOutDocsPublishedInTheFuture)

  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        {posts && posts.length > 0 && <BlogPostPreviewGrid nodes={posts} />}
      </Container>
    </Layout>
  )
}

export default BlogPage
