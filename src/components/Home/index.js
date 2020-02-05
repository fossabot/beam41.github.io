import Middle from "./middle/middle"
import React from "react"
import styles from "./Home.module.css"

function Main() {
  return (
    <div className={styles.app}>
      <Middle />
    </div>
  )
}

export default Main
