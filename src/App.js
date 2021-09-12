import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './modules/home'
import Contact from './modules/contact'
import Nav from './modules/navigation'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
