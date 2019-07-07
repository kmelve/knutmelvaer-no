import React from 'react'
import Header from './header'
import Stats from './stats'
import Bio from './bio'
import '../styles/layout.css'
import css from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={css.content}>{children}</div>
    <footer className={css.footer}>
      <div className={css.footerWrapper}>
        <Stats />
        <div className={css.social}>

          <p>Follow <a className="h-card" rel="me" href="https://www.knutmelvaer.no/">Knut</a> on <a href='https://twitter.com/kmelve' rel='me'>Twitter (@kmelve)</a>, <a href='https://github.com/kmelve' rel='me'>GitHub</a>, or send him an <a className="u-email" href='mailto:knut.melvaer@gmail.com' rel='me'>email</a>.</p>
          <div className={css.logos}>
            <a data-text="Follow me on dev.to" href="https://dev.to/kmelve">
            <svg xmlns='http://www.w3.org/2000/svg' height="30" width="30" viewBox='0 0 448 512'>
    <path d='M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z'
    />
</svg>
            </a><a href="/rss.xml"><svg style={{borderRadius: '3px'}} xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 24 24'>
    <path d='M0 0v24h24v-24h-24zm6.168 20c-1.197 0-2.168-.969-2.168-2.165s.971-2.165 2.168-2.165 2.167.969 2.167 2.165-.97 2.165-2.167 2.165zm5.18 0c-.041-4.029-3.314-7.298-7.348-7.339v-3.207c5.814.041 10.518 4.739 10.56 10.546h-3.212zm5.441 0c-.021-7.063-5.736-12.761-12.789-12.792v-3.208c8.83.031 15.98 7.179 16 16h-3.211z'
    />
</svg></a></div>
        </div>

        <div className={css.siteInfo}>
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
