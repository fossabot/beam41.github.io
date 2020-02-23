import React from "react"
import { Link } from "react-router-dom"
import styles from "./navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link>Phumdol Profile</Link>
    </nav>
  )
}
