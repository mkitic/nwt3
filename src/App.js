import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Modules/Home'
import Login from './Modules/Login'
import Profile from './Modules/Profile'


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
)

export default App;
