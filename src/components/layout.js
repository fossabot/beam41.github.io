import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import LightModeBtn from "./light-mode-btn"

import styles from "./layout.module.scss"

const routeList = {
  "/": {
    header: "Phumdol",
    subPage: false,
  },
  "/skill": {
    header: "Skill",
    subPage: true,
  },
}

const Layout = ({ children, location }) => {
  let routeList = {}
  if (typeof window !== `undefined`) {
    routeList = routeList[location.pathname]
  }
  return (
    <div>
      <LightModeBtn />
      <header
        className={
          styles.topBox +
          " " +
          (routeList.subPage ? styles.subPage : styles.home)
        }
      >
        <Link to="/">
          <h1>{routeList.header}</h1>
        </Link>
        <nav className={styles.navigation}>
          {routeList.subPage && (
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
