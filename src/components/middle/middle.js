import React from "react"
import styles from "./middle.module.scss"
import DescBar from "./desc-bar"
import SocialBar from "./social-bar"
import SkillBar from "./skill-bar"

class Middle extends React.Component {
  state = {
    name: "Phumdol",
    lname: "Lookthipnapha",
    desc: [
      "Studying Computer Science at Chiang Mai University",
      "Like to make web",
      "Also like cat",
    ],
    social: [
      {
        txt: "beam_baimon@hotmail.com",
        link: "mailto:beam_baimon@hotmail.com",
        ico: <i className="fas fa-envelope"></i>,
      },
      {
        txt: "beam41",
        link: "https://github.com/beam41",
        ico: <i className="fab fa-github"></i>,
      },
    ],
    skill: [
      {
        name: "JavaScript",
        subskill: ["React", "Angular", "Vue.js"],
      },
      {
        name: "C#",
        subskill: ["Unity", "ASP.NET Core"],
      },
      {
        name: "Other languages",
        subskill: ["Python", "Java"],
      },
    ],
  }
  render() {
    return (
      <div className={`${styles.container} ${styles.container_main}`}>
        <div className={styles.bigbox}>
          <div className={styles.box}>
            <h1>{this.state.name}</h1>
            <h2>{this.state.lname}</h2>
          </div>
          <DescBar descList={this.state.desc} />
          <SocialBar socialList={this.state.social} />
          <SkillBar skillList={this.state.skill} />
        </div>
      </div>
    )
  }
}

export default Middle
