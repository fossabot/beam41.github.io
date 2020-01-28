import React from "react"
import styles from "./social.module.scss"
import stylesM from "./middle.module.scss"

function SocialBar({ socialList }) {
  return (
    <div className={stylesM.box}>
      <h4>Social</h4>
      {socialList.map(value => {
        return (
          <p key={value.txt}>
            {value.ico}
            <a href={value.link} className={styles.ico_link}>
              {value.txt}
            </a>
          </p>
        )
      })}
    </div>
  )
}

export default SocialBar
