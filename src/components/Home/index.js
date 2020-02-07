import Middle from "./middle/middle"
import React, { useEffect } from "react"
import styles from "./Home.module.css"

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.app}>
      <Middle />
    </div>
  )
}

export default Main
