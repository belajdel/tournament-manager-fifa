import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Components
 */
import AppNavigation from './components/_Shared/Navigation/AppNavigation/AppNavigation';
import AppRouter from './router/AppRouter';
import HomeNavigation from './components/_Shared/Navigation/HomeNavigation/HomeNavigation';

const App: React.FC = () => {
  return (
    <Router>

      {/* Navigation | Basic */}
      {/* <HomeNavigation /> */}

      {/* Navigation | Authenticated */}
      <AppNavigation />

      {/* Router | Component */}
      <AppRouter />
        
    </Router>
  );
}

export default App;