import React, { Suspense, lazy } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Footer from "./components/footer/footer"
import Loading from "./components/loading/loading"

const Home = lazy(() => import("./components/Home"))
const DDA = lazy(() => import("./components/DDA"))
const Portfolio = lazy(() => import("./components/Portfolio"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DDA" component={DDA} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
