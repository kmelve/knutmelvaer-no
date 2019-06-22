import React from 'react'
import {graphql} from 'gatsby'
import {isFuture} from 'date-fns'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Presentation from '../components/presentation'
import Layout from '../containers/layout'

const isPast = ({node: {machineDate}}) => !isFuture(machineDate)

export const query = graphql`{
  presentations: allSanityPresentation(sort: {fields: date, order: DESC}, filter: {tags: {in: "tech"}}) {
    edges {
      node {
        date(formatString: "DD.MM.YYYY")
        machineDate: date
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
  const presentations = data.presentations.edges
  const futurePresentations = presentations.filter(({node: {machineDate}}) => isFuture(machineDate))
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
      <SEO
        title="About Knut Melvær"
        description="Knut Melvær (b. 1985) is a graduate in the study of religion\s who has pivoted into technology. He is currently working as Head of Developer Relations at Sanity.io. Previously he has been a senior technology consultant at Netlife, a renowned Norwegian UX- and Design Agency. Before that a PhD. Fellow at the University of Bergen"
        image="https://cdn.sanity.io/images/ndjrels0/production/46f420efe0408caaf07eb2c4e6989323001f080f-1200x802.jpg?w=2000&h=2000&fit=max"
        slug={{current: 'work'}}
      />
      <Container>
        <main>
          <h1>About Knut</h1>
          <p>Knut Melvær (b. 1985) is a graduate in the study of religion\s who has pivoted into technology. He is currently working as Head of Developer Relations at <a href='https://www.sanity.io'>Sanity.io</a>. Previously he has been a senior technology consultant at <a href='https://www.netlife.com'>Netlife</a>, a reknowned Norwegian UX- and Design Agency. Before that a PhD Fellow at the <a href='https://uib.no/en'>University of Bergen</a>.</p>
          <p>As a technology consultant, he has held workshops in user research, technology strategy, and web development. He has been involved in projects with a wide range of clients such as <a href="https://energiogklima.no/">Energi og Klima</a>, <a href="https://ndla.no">NDLA</a>, <a href="https://enivest.no">Enivest</a>, <a href="https://foslive.com">Fearnley Offshore Supply</a>, <a href="https://vff.no">Norwegian Fund and Asset Management Association</a>, <a href="http://warnermusic.no">Warner Music</a>, <a href="https://www.debergenske.no/en/">De Bergenske Hotels</a>, <a href="https://dfo.no/english">The Norwegian Government Agency for Financial Management</a>, <a href="https://www.u4.no/">U4 Anti-Corruption Resource Centre</a>, <a href="https://www.oslo.kommune.no/">The City of Oslo</a>, and <a href="https://www.gjensidige.no/group/about-us">Gjensidige</a>.</p>
          <p>Knut has extensive experience in research, dissemination, teaching, and writing. He has organized and taught courses from undergraduate to graduate level at university. His fields of study have been quantiative and qualitative methodologies in the study of religion, the evolutionary and cognitive science of religion, new religiosity, and digital humanities. He has done podcast interviews of <a href='https://www.holbergprisen.no/en'>Holberg Prize laureates</a> and been a columnist in newspapers like <a href='https://klassekampen.no'>Klassekampen</a>, <a href='https://sysla.no/'>Sysla</a>, and <a href='https://www.morgenbladet.no'>Morgenbladet</a>.</p>
          <p>To get in touch, please contact Knut by <a href='mailto:knut.melvaer@gmail.com'>email</a> or DM on <a href='https://twitter.com/kmelve'>twitter</a>. You can also add him to your professional network on <a href="https://www.linkedin.com/in/knutmelvaer/">LinkedIn</a></p>
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
