import React from 'react'
import routes from './routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Dashboard = (props) => {
  return (
    <div>
      <h1>dashboard</h1>
      <ul>
        {routes.map(route => (
          <li>
            <Link to={`/dashboard/${route.path}`}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      <Router>
        <Switch>
          {routes.map((route, key) => (
            <Route exact path={`/dashboard/${route.path}`} component={route.component} key={key} />
          ))}
          <Route path="*" component={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  )
}

export default Dashboard;