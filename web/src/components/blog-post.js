import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj, getBlogUrl, toPlainText} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import Bio from './bio'
import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, _rawExcerpt, authors, categories, title, mainImage, publishedAt, slug} = props
  return (
    <article className={styles.root + " h-entry"}>
      <Container>
        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              className="u-photo"
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
          <main className={styles.mainContent}>
            <h1 className={styles.title + " p-name"}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </main>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                <a className="u-url" href={`https://www.knutmelvaer.no${getBlogUrl(publishedAt, slug)}`}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
                </a>
                <time className={styles.hidden + " dt-published"} itemprop="datepublished" datetime={publishedAt}>{new Date(publishedAt).toISOString().replace('Z', '') + "+01:00"}</time>
                {_rawExcerpt && <div className={styles.hidden + " p-summary e-content"}>{toPlainText(_rawExcerpt)}</div>}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li className="p-category" key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
            </div>
          </aside>
          <footer className={styles.footer}>
            {authors && authors.map(({author}) => <Bio author={author} />)}
          </footer>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
