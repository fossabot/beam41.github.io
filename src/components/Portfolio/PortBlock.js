import React from "react"
import styles from "./Port.module.scss"

export default function Portblock({ info, onRight }) {
  return (
    <div
      className={styles.box}
      style={{
        backgroundImage: ` linear-gradient(to ${
          onRight ? "right" : "left"
        }, #000f 25%, #0000 75%),
        url(${info.img})`,
      }}
    >
      <span
        class={styles.spright}
        style={{ justifySelf: onRight ? "flex-start" : "flex-end" }}
      >
        <h2>{info.title}</h2>
        <p>{info.desc}</p>
        <a href={info.link}>{info.link}</a>
        <p>Tech used:</p>
        <ul>
          {info.tech.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </span>
    </div>
  )
}
