import {format, formatDistanceToNow, differenceInDays,parseISO} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import {buildImageObj, getBlogUrl, toPlainText} from '../lib/helpers'
import clientConfig from '../../client-config'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import SEO from '../components/seo'
import AuthorList from './author-list'
import Bio from './bio'
import WM from './wm'
import Twitter from './twitter'
import styles from './blog-post.module.css'


const fluidProps = mainImage => (mainImage && mainImage.asset) && getFluidGatsbyImage(
  mainImage.asset._id,
  {width: 960, height: Math.floor((9 / 16) * 960)},
  {projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'ndjrels0',
  dataset: process.env.GATSBY_SANITY_DATASET || 'production'}
)
function BlogPost (props) {
  const {_rawBody, _rawExcerpt, authors, categories, title, mainImage, publishedAt, _updatedAt, readingTimeInMinutes, slug, wm, tweet} = props

  return (
    <article className={styles.root + ' h-entry'}>
      <SEO
        title={title}
        description={toPlainText(_rawExcerpt || [])}
        image={imageUrlFor(buildImageObj(mainImage))
          .width(960)
          .height(Math.floor((9 / 16) * 960))
          .fit('crop')
          .auto('format')
          .url()}
        type='article'
      />
      <Container>
        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <Img fluid={fluidProps(mainImage)} alt={mainImage.alt} className='u-photo' />
            <figcaption>{mainImage.caption}</figcaption>
          </div>
        )}
        <div className={styles.grid}>
          <main className={styles.mainContent}>
            <h1 className={styles.title + ' p-name'}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </main>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                <p><a className='u-url' href={`https://www.knutmelvaer.no${getBlogUrl(publishedAt, slug)}`}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? formatDistanceToNow(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM dd, yyyy')}
                </a></p>
                <time className={styles.hidden + ' dt-published'} itemProp='datepublished' dateTime={publishedAt}>{new Date(publishedAt).toISOString().replace('Z', '') + '+01:00'}</time>
                <p>A {readingTimeInMinutes} minute{readingTimeInMinutes > 1 ? 's': ''} read. {readingTimeInMinutes > 5 ? '☕️' : '⚡️'}</p>
                {_rawExcerpt && <div className={styles.hidden + ' p-summary e-content'}>{toPlainText(_rawExcerpt)}</div>}
              </div>
            )}
            {authors && <AuthorList items={authors} title={`Author${authors.length > 1 ? 's' : '' }`} />}
            {categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li className='p-category' key={category._id}>
                      <Link to={`/category/${category.slug.current}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h3 className={styles.categoriesHeadline}>Twitter</h3>
                {tweet && <Twitter twitterUrl={tweet} />}
                {wm && <WM {...wm} />}
              </div>
            )}
            <div />
          </aside>
          {/* <footer className={styles.footer}>
            {authors && authors.map(({author}) => <Bio author={author} />)}
          </footer> */}
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
