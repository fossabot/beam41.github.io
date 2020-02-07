import React, { Component } from "react"

import Loading from "../loading/loading"
import PortBlock from "./PortBlock"
import styles from "./Port.module.scss"

class Main extends Component {
  constructor() {
    super()
    this.state = {
      item: null,
    }
  }

  componentDidMount() {
    import("./PortItem").then(poIt => {
      this.setState({ item: poIt.portItem })
    })
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className={styles.app}>
        <h1>Phumdol Portfolio</h1>
        {this.state.item &&
          this.state.item.map((val, index) => (
            <PortBlock info={val} key={index} onRight={index % 2 === 0} />
          ))}
        {!this.state.item && <Loading dark />}
      </div>
    )
  }
}

export default Main
