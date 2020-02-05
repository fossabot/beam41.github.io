import PortBlock from "./PortBlock"
import React from "react"
import { portItem } from "./PortItem"
import styles from "./Port.module.scss"

function Main() {
  return (
    <div className={styles.app}>
      <h1>Phumdol Portfolio</h1>
      {portItem.map((val, index) => (
        <PortBlock info={val} key={index} onRight={index % 2 === 0} />
      ))}
    </div>
  )
}

export default Main
