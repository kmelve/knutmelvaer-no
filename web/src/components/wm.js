import React from 'react'
import css from './wm.module.css'
export default function wm({edges}) {
  const likes = edges.filter(({node}) => node.wmProperty === "like-of")
  const likeFaces = likes.map(({node}) => node.author && ({wmId: node.wmId, ...node.author}))
  return (<div className={css.root}>
    <h4><span>{`${likes.length} likes`}</span></h4>
    <div className={css.container}>
    {likeFaces.map(face => <a className={css.face} href={face.url}><img  alt={face.name} src={face.photo} key={face.wmId} /></a>)}
    </div>
    {/* <pre>
    {JSON.stringify(edges, null, 2)}
  </pre> */}
    </div>)
}
