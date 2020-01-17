import React from "react"
import styles from "./skill.module.scss"

function SubSkillBar({ skillList }) {
  return (
    <>
      {skillList.map(value => {
        if (value.subskill)
          return (
            <div className={styles.box} key={value.name}>
              <p>{value.name}</p>
              <div className={styles.subskill}>
                <SubSkillBar
                  skillList={value.subskill.map(value => {
                    return { name: value }
                  })}
                />
              </div>
            </div>
          )
        return (
          <div className={styles.box} key={value.name}>
            <p>{value.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default SubSkillBar
