import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Components
 */
import AppNavigation from './components/_Shared/AppNavigation/AppNavigation';
import AppRouter from './router/AppRouter';
import HomeNavigation from './components/_Shared/HomeNavigation/HomeNavigation';

const App: React.FC = () => {
  return (
    <Router>

      {/* Navigation */}
      {/* <HomeNavigation /> */}

      <AppNavigation />

      {/* Router | Component */}
      <AppRouter />
        
    </Router>
  );
}

export default App;