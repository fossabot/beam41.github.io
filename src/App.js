import React, { Suspense, lazy } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Footer from "./components/footer/footer"

const Home = lazy(() => import("./components/Home"))
const DDA = lazy(() => import("./components/DDA"))
const Portfolio = lazy(() => import("./components/Portfolio"))

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={Home} />
          <Route path="/DDA" component={DDA} />
          <Route path="/portfolio" component={Portfolio} />
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
