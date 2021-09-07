import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './modules/home'
import Nav from './modules/navigation'

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
