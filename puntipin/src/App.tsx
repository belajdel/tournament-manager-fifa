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
import Home from './modules/HomeModule/Home/Home';
import About from './modules/HomeModule/About/About';
import Login from './modules/AuthenticationModule/Login/Login';
import Signup from './modules/AuthenticationModule/Signup/Signup';
import HomeNavigation from './components/HomeNavigation/HomeNavigation';
// import AppNavigation from './components/AppNavigation/AppNavigation';

const App: React.FC = () => {
  return (
    <Router>

      <section className="app">
        
        {/* Home Navigation */}
        <HomeNavigation />

        {/* App Navigation */}
        {/* <AppNavigation /> */}

        <section>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

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
        </section>
        
      </section>
    </Router>
  );
}

export default App;