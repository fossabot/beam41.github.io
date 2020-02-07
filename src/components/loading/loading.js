import React from "react"
import styles from "./loading.module.scss"

export default function Loading({ dark }) {
  return (
    <div className={styles.container + (dark ? `${styles.isDark}` : "")}>
      <div className={styles.spinner}></div>
    </div>
  )
}
