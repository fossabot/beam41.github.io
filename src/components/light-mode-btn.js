import React, { useState, useEffect } from "react"

import styles from "./light-mode.btn.module.scss"

const LightModeBtn = () => {
  const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)")

  const [darkMode, setDarkmode] = useState(darkModeMedia.matches)
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  darkModeMedia.addEventListener("change", e => {
    setDarkmode(e.matches)
  })

  return (
    <div className={styles.lightModeBtn}>
      <label>
        <div className={styles.bg + " " + (darkMode ? styles.dark : "")}>
          <div className={styles.dot}></div>
          <div className={styles.moonDot}></div>
        </div>
        <input
          class="fully-hidden"
          type="checkbox"
          checked={darkMode}
          onChange={event => setDarkmode(event.target.checked)}
        />
      </label>
      <p class={styles.hint}>try {darkMode ? "light" : "dark"} mode!</p>
    </div>
  )
}

export default LightModeBtn
