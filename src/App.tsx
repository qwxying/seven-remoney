import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './views/Home';
import Details from './views/Details';
import Users from './views/Users';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="home"/>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/details">
          <Details/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
