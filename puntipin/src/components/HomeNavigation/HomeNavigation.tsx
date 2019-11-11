import React from 'react';
import {
  Link
} from 'react-router-dom';
import { NavigationContainer, ListItem } from './HomeNavigationStyles';

const HomeNavigation: React.FC = () => {

  const ListStyle = {
    display: 'flex'
  };
  
  return (
    <NavigationContainer>
      <ul style={ListStyle}>

        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">Log in</Link>
        </ListItem>
        <ListItem>
          <Link to="/signup">Sign up</Link>
        </ListItem>
      
      </ul>
    </NavigationContainer>
  );
}

export default HomeNavigation;