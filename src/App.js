import React from 'react'
import Home from './components/Home'
import Login from './components/loginAndRegistration/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
				<Switch>
							<Route path="/" exact={true} component={Home} />
              <Route path="/login" exact={true} component={Login} />
        </Switch>
    </Router>
  )
}

export default App
