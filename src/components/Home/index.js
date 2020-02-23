import React, { lazy, Suspense, useEffect } from "react"
import Loading from "../loading/loading"

const Home = lazy(() => import('./Home'));

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  )
}

export default Main
