import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


/**
 * Components
 */
import About from '../components/HomeModule/About/About';
import Home from '../components/HomeModule/Home/Home';
import Login from '../components/AuthenticationModule/Login/Login';
import Settings from '../components/AccountModule/Settings/Settings';
import Signup from '../components/AuthenticationModule/Signup/Signup';

function AppRouter() {
	return (
		<Router>
      <Switch>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/signup">
            <Signup />
          </Route>
        
      </Switch>
    </Router>
	);
}

export default AppRouter;