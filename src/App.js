import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
