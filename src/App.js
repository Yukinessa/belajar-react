import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  )
}
