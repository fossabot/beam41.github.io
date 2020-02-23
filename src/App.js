import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"

import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
