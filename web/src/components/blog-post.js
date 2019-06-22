import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt, slug} = props
  return (
    <article className={styles.root + " e-entry"}>
      <Container>
        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(960)
                .height(Math.floor((9 / 16) * 960))
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title + " e-name"}>{title}</h1>
            {_rawBody && <PortableText className="e-content" blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt + " dt-published"}>
                <a className="u-url" href={`https://www.knutmelvaer.no${getBlogUrl(publishedAt, slug)}`}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
                </a>
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>

            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
