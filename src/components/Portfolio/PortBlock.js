import React from "react"
import styles from "./Port.module.scss"

export default function Portblock({ info, onRight }) {
  return (
    <div
      className={
        styles.box + (onRight ? ` ${styles.onplus}` : ` ${styles.onminus}`)
      }
      style={{
        backgroundImage: ` linear-gradient(to ${
          onRight ? "right" : "left"
        }, #000f 5%, #0003 95%),
        url(${info.img})`,
      }}
    >
      <span
        className={styles.spbox + (!onRight ? ` ${styles.toright}` : "")}
        style={{ justifySelf: onRight ? "flex-start" : "flex-end" }}
      >
        <h2>{info.title}</h2>
        <p>{info.desc}</p>
        <p>
          <a href={info.link}>{info.link}</a>
        </p>
        <p>
          <strong>Tech used:</strong>
        </p>
        <ul>
          {info.tech.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </span>
    </div>
  )
}
