import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import LightModeBtn from '../components/light-mode-btn'

import styles from './layout.module.scss'

const Layout = ({ children, location, pageContext }) => {
  return (
    <div>
      {typeof window !== 'undefined' && <LightModeBtn />}
      <header
        className={
          styles.topBox +
          ' ' +
          (location.pathname !== '/' || pageContext.subPage
            ? styles.subPage
            : styles.home)
        }
      >
        <Link to="/" className={styles.head}>
          <h1>Phumdol</h1>
        </Link>
        <nav className={styles.navigation}>
          {(location.pathname !== '/' || pageContext.subPage) && (
            <div className={styles.navigationLink}>
              <Link to="/">Home</Link>
            </div>
          )}
          <div className={styles.navigationLink}>
            <Link to="/skill">Skill</Link>
          </div>
        </nav>
      </header>
      {children && <main>{children}</main>}
      <footer className={styles.footer}>
        <div>
          Made with <a href="https://www.gatsbyjs.org/">GatsbyJS</a> by{' '}
          <a href="https://github.com/beam41">beam41</a> for{' '}
          <a href="https://gitlab.com/beam41">himself</a>
        </div>
      </footer>
    </div>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
}

export default Layout
