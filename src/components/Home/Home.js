import React, { Component } from "react"
import styles from "./Home.module.scss"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"
import html from "./html"

export default class Home extends Component {
  constructor() {
    console.dir(html)
    super()
    this.state = {
      txt: html,
      colorArr: [],
      currTxt: 0,
    }
  }

  componentDidMount() {
    const printnext = () => {
      if (this.state.currTxt !== this.state.txt.length) {
        let { currTxt, txt } = this.state
        ++currTxt
        while (txt[currTxt] === " ") {
          ++currTxt
        }
        this.setState({
          currTxt,
        })
        setTimeout(printnext)
      }
    }
    printnext()
  }

  render() {
    return (
      <main className={styles.main}>
        <SyntaxHighlighter language="html" style={vs2015}>
          {this.state.txt.slice(0, this.state.currTxt)}
        </SyntaxHighlighter>
      </main>
    )
  }
}
