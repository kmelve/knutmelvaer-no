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
          posts: allSanityPost(limit: 5) {
            edges {
              node {
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
          const findPostBySlug = ({ node: { publishedAt, slug } }) =>
            slug && entry.name == `/blog/${publishedAt}/${slug.current}/`
          return [
            ...acc,
            { ...entry, ...posts.edges.find(findPostBySlug).node }
          ]
        }
        return (
          <div>
            <h2 className={css.headline}>Most read posts</h2>
            <ol className={css.root}>
              {stats
                .filter(({ name }) => /^\/blog.*/.test(name))
                .reduce(mergeStatsAndPosts, [])
                .map(({ title, name }) => (
                  <li>
                    <Link to={name}>{title}</Link>
                  </li>
                ))}
            </ol>
            <p>This website has been viewed {totals.aggregate.sum.pageviews} times by {totals.aggregate.sum.visitors} visitors ({site.buildTime}). </p>
          </div>
        )
      }}
    />
  )
}
