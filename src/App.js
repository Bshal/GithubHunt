import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import SingleUser from './components/users/most_followed_users/SingleUser';
import MostFollowedUsersPage from './components/users/most_followed_users/MostFollowedUsersPage';
import MostStarredRepositoriesPage from './components/repos/MostStarredRepositoriesPage';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import './App.css';

const App =() => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:login" component={SingleUser} />
          <Route exact path="/users/:users" component={MostFollowedUsersPage} />
          <Route exact path="/repos/:repos" component={MostStarredRepositoriesPage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
