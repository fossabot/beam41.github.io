import React from "react"
import styles from "./middle.module.scss"

function DescBar({ descList }) {
  return (
    <div class={styles.box}>
      {descList.map(value => {
        return <p>{value}</p>
      })}
    </div>
  )
}

export default DescBar
