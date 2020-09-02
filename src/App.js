import React from 'react'
import Home from './components/Home'
import Login from './components/user/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/user/signup/Registration';
const App = () => {
  return (
    <Router>
				<Switch>
							<Route path="/" exact={true} component={Home} />
              <Route path="/login" exact={true} component={Login} />
              <Route path="/registration" exact={true} component={Registration} />
        </Switch>
    </Router>
  )
}

export default App
