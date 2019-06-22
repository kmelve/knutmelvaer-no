import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.social}>
          <p>Follow <a className="h-card" rel="me" href="https://www.knutmelvaer.no/">Knut</a> on <a href='https://twitter.com/kmelve' rel='me'>Twitter (@kmelve)</a>, <a href='https://github.com/kmelve' rel='me'>GitHub</a>, or send him an <a className="u-email" href='mailto:knut.melvaer@gmail.com' rel='me'>email</a>.</p><p><a href="https://dev.to/kmelve">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Knut Melvær's DEV Profile" height="30" width="30" />
</a></p>
        </div>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
