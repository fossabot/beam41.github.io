import React from "react"
import styles from "./skill.module.scss"
import SubSkillBar from "./sub-skill-bar"

function SkillBar({ skillList }) {
  return (
    <div class={styles.box}>
      <h4>Skill</h4>
      <div class={styles.container}>
        <SubSkillBar skillList={skillList} />
      </div>
    </div>
  )
}

export default SkillBar
