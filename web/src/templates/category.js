import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import CategoryPage from '../components/category-page'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      title
      slug {
        current
      }
      description
    }
    posts: allSanityPost(
      filter: {
        slug: { current: { ne: null } }
        categories: { elemMatch: { id: { eq: $id } } }
      }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
            caption
          }
          _rawExcerpt
        }
      }
    }
  }
`

const CategoryTemplate = props => {
  const { data, errors } = props
  const { category, posts } = data

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {category && (
        <SEO
          title={category.title || 'Untitled'}
          description={category.description}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {category && <CategoryPage {...category} posts={posts} />}
    </Layout>
  )
}

export default CategoryTemplate
