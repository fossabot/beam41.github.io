import { Link, useLocation } from "react-router-dom"

import React from "react"
import styles from "./footer.module.scss"

function Footer() {
  const isHome = useLocation().pathname === "/"

  return (
    <footer
      className={styles.footer}
      style={{
        backgroundColor: "#000000" + (isHome ? "0e" : "00"),
      }}
    >
      <div className={styles.container}>
        <p>Meehoi</p>
        <p>
          {isHome && (
            <Link to="/DDA">
              My another github website(for my graphics class)
            </Link>
          )}
          {!isHome && <Link to="/">Back home</Link>}
        </p>
      </div>
    </footer>
  )
}

export default Footer
