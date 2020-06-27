import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Loadable from "@loadable/component"

import styles from "./layout.module.scss"

const LightModeBtn = Loadable(() => import("./light-mode-btn"))

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
  const currRoute = routeList[location.pathname]

  return (
    <div>
      <LightModeBtn />
      <header
        className={
          styles.topBox +
          " " +
          (currRoute?.subPage ? styles.subPage : styles.home)
        }
      >
        <Link to="/">
          <h1>{currRoute?.header}</h1>
        </Link>
        <nav className={styles.navigation}>
          {currRoute?.subPage && (
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
