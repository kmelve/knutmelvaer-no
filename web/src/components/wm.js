import React from 'react'
import css from './wm.module.css'
export default function wm ({ edges }) {
  const likes = edges.filter(({ node }) => node.wmProperty === 'like-of')
  const retweets = edges.filter(({ node }) => node.wmProperty === 'repost-of')
  const retweetFaces = retweets.map(
    ({ node }) => node.author && { wmId: node.wmId, ...node.author }
  )
  console.log(retweetFaces)
  const likeFaces = likes.map(
    ({ node }) => node.author && { wmId: node.wmId, ...node.author }
  )
  return (
    <div className={css.root}>
      <h4>
        <span>{`${likes.length} likes`}</span>
      </h4>
      <div className={css.container}>
        {likeFaces.map(face => (
          <a className={css.face} href={face.url} key={face.wmId}>
            {face.photo
            ? <img alt={face.name} src={face.photo} />
            : <div className={css.faceFallback}>{face.name}</div>
            }
          </a>
        ))}
      </div>
      <h4>
        <span>{`${retweets.length} reposts`}</span>
      </h4>
      <div className={css.container}>
        {retweetFaces.map(face => (
          <a className={css.face} href={face.url} key={face.wmId}>
            {face.photo
            ? <img alt={face.name} src={face.photo} />
            : <div className={css.faceFallback}>{face.name[0]}</div>
            }
          </a>
        ))}
      </div>
      {/* <pre>
    {JSON.stringify(edges, null, 2)}
  </pre> */}
    </div>
  )
}
