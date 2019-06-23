import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

import styles from './author-list.module.css'

function AuthorList ({ items, title }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name
          return (
            <li key={_key} className={styles.listItem + ' h-card'} rel="author">
              <div className={styles.avatar}>
                {author &&
                  author.image &&
                  author.image.asset && (
                    <img
                      className="u-photo"
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt={authorName}
                    />
                  )}
              </div>
              <div className="p-name">
                {authorName || <em>Missing name</em>}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AuthorList
