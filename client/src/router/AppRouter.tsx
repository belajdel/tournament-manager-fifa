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
import Settings from '../components/AccountModule/Settings/Settings';
import Signup from '../components/AuthenticationModule/Signup/Signup';
import ResetPassword from '../components/AuthenticationModule/ResetPassword/ResetPassword';

function AppRouter() {
	return (
    <Switch>

      <Route path="/settings">
        <Settings />
      </Route>

      <Route path="/reset-password">
        <ResetPassword />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      
    </Switch>
	);
}

export default AppRouter;