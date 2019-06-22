import React from 'react'
import {graphql} from 'gatsby'
import {isFuture} from 'date-fns'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Presentation from '../components/presentation'
import Layout from '../containers/layout'

const isPast = ({date}) => !isFuture(date)

export const query = graphql`{
  presentations: allSanityPresentation(sort: {fields: date, order: DESC}, filter: {tags: {in: "tech"}}) {
    edges {
      node {
        date(formatString: "DD.MM.YYYY")
        description
        place
        title
        language
        presentationType
        link
        collaborators {
          id
          name
        }
      }
    }
  }
}
`

const WorkPage = props => {
  const {data, errors} = props
  const presentations = data.presentations.edges.reduce((acc, node) => [...acc, ...node], [])
  const futurePresentations = presentations.filter(({date}) => isFuture(date))
  const pastPresentations = presentations.filter(isPast)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <main>
          <h2>Speaking & Workshops</h2>
          <h3>Upcoming</h3>
          { futurePresentations.length > 0
            ? futurePresentations
              .map(Presentation)
            : <p>No upcoming presentations. <a href='mailto:knut.melvaer@gmail.com'>Contact me</a></p>
          }
          <h3>Past</h3>
          {
            pastPresentations
              .map(Presentation)
          }
        </main>
      </Container>
    </Layout>
  )
}

export default WorkPage
