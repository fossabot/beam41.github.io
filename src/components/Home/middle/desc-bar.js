import React from "react"
import styles from "./middle.module.scss"

function DescBar({ descList }) {
  return (
    <div className={styles.box}>
      {descList.map((value, i) => {
        return <p key={i}>{value}</p>
      })}
    </div>
  )
}

export default DescBar
