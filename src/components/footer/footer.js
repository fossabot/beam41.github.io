import React from "react"
import styles from "./footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div class={styles.container}>
        <p>Meehoi</p>
        <p>
          <a href="https://beam41.github.io/204382-DDA/">
            My another github website(for my graphics class)
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
