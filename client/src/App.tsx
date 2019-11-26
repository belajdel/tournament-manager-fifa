import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Components
 */
import HomeNavigation from './components/_Shared/HomeNavigation/HomeNavigation';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <Router>

      {/* Navigation */}
      <HomeNavigation />

      {/* Router | Component */}
      <AppRouter />
        
    </Router>
  );
}

export default App;