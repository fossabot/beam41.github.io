import React from "react"
import styles from "./draw-canvas.module.css"

class DrawCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cwidth: window.innerWidth - 50,
      cheight: window.innerHeight - 180,
      toolarge: false,
    }
    this.handleResize = this.handleResize.bind(this)
  }

  lineDDA(ctx, xa, ya, xb, yb, scale = 10) {
    const { abs, round } = Math
    let toolarge = false
    let dx = xb - xa,
      dy = yb - ya,
      steps,
      k,
      xi,
      yi,
      x = xa,
      y = ya

    if (abs(dx) > abs(dy)) steps = abs(dx)
    else steps = abs(dy)
    xi = dx / steps
    yi = dy / steps

    ctx.fillRect(round(x) * scale, round(y) * scale, scale, scale)
    for (k = 0; k < steps; k++) {
      x += xi
      y += yi
      if (x * scale > this.state.cwidth || y * scale > this.state.cheight)
        toolarge = true

      ctx.fillRect(round(x) * scale, round(y) * scale, scale, scale)
    }
    if (this.state.toolarge !== toolarge) this.setState({ toolarge })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)

    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = this.props.fillcolor
    this.lineDDA(
      ctx,
      this.props.xa,
      this.props.ya,
      this.props.xb,
      this.props.yb,
      this.props.scale,
    )
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = this.props.fillcolor
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.lineDDA(
      ctx,
      this.props.xa,
      this.props.ya,
      this.props.xb,
      this.props.yb,
      this.props.scale,
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false)
  }

  handleResize() {
    this.setState({
      cwidth: window.innerWidth - 50,
      cheight: window.innerHeight - 180,
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <canvas
          width={this.state.cwidth}
          height={this.state.cheight}
          className={`${styles.canva} ${
            this.state.toolarge ? styles.canva_warn : ""
          }`}
          ref="canvas"
        ></canvas>
        <div
          className={styles.warn}
          style={{
            width: this.state.cwidth,
            height: this.state.cheight,
          }}
        >
          <p
            style={{
              visibility: !this.state.toolarge ? "hidden" : "visible",
              color: !this.state.toolarge ? "#f57f1700" : "#f57f17ff",
            }}
          >
            Warning: The line is longer than the canvas size!
          </p>
        </div>
      </div>
    )
  }
}

export default DrawCanvas
