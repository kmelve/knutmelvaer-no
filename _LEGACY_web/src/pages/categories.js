import React from 'react'
import {graphql, Link} from 'gatsby'
import {mapEdgesToNodes, filterOutDocsPublishedInTheFuture} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query CategoriesQuery {
    categories: allSanityCategory(filter: {slug: {current: {ne: null}}}) {
      group(field: _id) {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const CategoryLink = ({id, title, slug}) => {
  return <li key={id}>
    <Link to={`category/${slug.current}`}>{title}</Link>
  </li>
}

const CategoriesPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const categories = data && data.categories && data.categories.group.map(({nodes}) => nodes[0])


  return (
    <Layout>
      <SEO title='Categories' />
      <Container>
        <h1 className={responsiveTitle1}>Categories</h1>
        <ul>
        {
          categories.map(CategoryLink)
        }</ul>
      </Container>
    </Layout>
  )
}

export default CategoriesPage
