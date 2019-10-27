import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import css from './stats.module.css'

export default function Stats () {
  return (
    <StaticQuery
      query={graphql`
        query StatsQuery {
          fathom {
            stats: stats_by_path {
              visitors
              agg_avg_duration
              entries
              pageviews
              known_durations
              id
              name
              avg_bounce_rate
            }
            totals: site_stats_aggregate(where: { site_id: { _eq: 1 } }) {
              aggregate {
                count
                sum {
                  pageviews
                  visitors
                }
              }
            }
          }
          posts: allSanityPost(filter: {publishedAt: {nin: "true"}, slug: {current: {nin: "true"}}}) {
            edges {
              node {
                _id
                title
                publishedAt(formatString: "YYYY/MM")
                slug {
                  current
                }
              }
            }
          }
          site {
            buildTime(formatString: "YYYY-MM-DD")
          }
        }
      `}
      render={({ site, posts, fathom: { stats, totals } }) => {
        const mergeStatsAndPosts = (acc, entry) => {
          const [node] = posts.edges
          .filter(({node}) => node.slug && node.slug.current)
          .filter(({node}) => entry.name == `/blog/${node.publishedAt}/${node.slug.current}/`)
          return node ? [
            ...acc,
            { ...entry, ...node }
          ] : acc
        }
        return (
          <div>
            <h2 className={css.headline}>Most read posts</h2>
            <ol className={css.root}>
              {stats
                .filter(({ name }) => /^\/blog\/.*$/.test(name))
                .reduce(mergeStatsAndPosts, [])
                .filter(Boolean)
                .sort((a,b) => b.pageviews - a.pageviews)
                .slice(0,5)
                .map(({ name, node: {_id, title} }) => (
                  <li key={_id}>
                    <Link to={name}>{title}</Link>
                  </li>
                ))}
            </ol>
            <p>This website has been viewed {totals.aggregate.sum.pageviews} times by {totals.aggregate.sum.visitors} visitors (2019-07-07 to {site.buildTime}). </p>
          </div>
        )
      }}
    />
  )
}
