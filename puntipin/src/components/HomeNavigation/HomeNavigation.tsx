import React from 'react';
import {
  Link
} from 'react-router-dom';
import { NavigationContainer } from './HomeNavigationStyles';

const HomeNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/login">Log in</Link>
        </li>

        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      
      </ul>
    </NavigationContainer>
  );
}

export default HomeNavigation;