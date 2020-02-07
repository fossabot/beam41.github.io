import { Link, useLocation } from "react-router-dom"

import React from "react"
import styles from "./footer.module.scss"

function Footer() {
  const pn = useLocation().pathname
  const isHome = pn === "/"
  const isPort = pn === "/portfolio"
  const isDda = pn === "/DDA"

  return (
    <footer
      className={isPort ? `${styles.port}` : isHome ? `${styles.home}` : ""}
    >
      <div className={styles.container}>
        <p>Meehoi</p>

        {(isHome || isPort) && (
          <p>
            <Link to="/DDA">
              My another github website(for my graphics class)
            </Link>
          </p>
        )}

        {(isHome || isDda) && (
          <p>
            <Link to="/portfolio">Portfolio</Link>
          </p>
        )}

        {!isHome && (
          <p>
            <Link to="/">Back home</Link>
          </p>
        )}
      </div>
    </footer>
  )
}

export default Footer
