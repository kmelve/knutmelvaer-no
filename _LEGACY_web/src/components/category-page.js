import React from 'react'
import Container from './container'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'

const CategoryPage = props => {
  const { title, posts } = props
  const postNodes = posts.edges
    ? mapEdgesToNodes(posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <Container>
      {postNodes &&
        postNodes.length > 0 && (
          <BlogPostPreviewList
            title={`Posted under: ${title}`}
            nodes={postNodes}
            browseMoreHref="/categories/"
          />
        )}
    </Container>
  )
}

export default CategoryPage
