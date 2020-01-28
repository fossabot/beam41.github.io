import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import DDA from "./components/DDA"
import Footer from "./components/footer/footer"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/DDA">
          <DDA />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
