import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function Stats () {
  return (
    <StaticQuery
      query={graphql`
        query StatsQuery {
          fathom {
            stats: stats_by_path{
              visitors
              agg_avg_duration
              entries
              pageviews
              known_durations
              id
              name
              avg_bounce_rate
            }
          }
        }
      `}
      render={({fathom: {stats}}) => (
        <div>
          <h2>Top posts</h2>
          <ul>
            {
              stats
                .filter(({name}) => /^\/blog.*/.test(name))
                .map(entry => <li>{entry.name}</li>)
            }
          </ul>
          <pre>{JSON.stringify(stats, null, 2)}</pre>
        </div>
      )}
    />
  )
}
