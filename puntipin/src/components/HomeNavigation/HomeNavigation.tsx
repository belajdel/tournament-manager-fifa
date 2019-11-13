import React from 'react';
import { 
  NavigationContainer, 
  NavHeader,
  NavList,
  ListItemLink,
  ListItem, 
  AuthList,
  NavigatorContainer
} from './HomeNavigationStyles';

const HomeNavigation: React.FC = () => {
  return (
    <NavigationContainer>

      <NavHeader>
        puntipin
      </NavHeader>
      
      {/* Navigator Container */}
      <NavigatorContainer>
        <NavList>
          <ListItem>
            <ListItemLink to="/">Home</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/about">About</ListItemLink>
          </ListItem>
        </NavList>

        <AuthList>
          <ListItem>
            <ListItemLink to="/login">Log in</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/signup">Sign up</ListItemLink>
          </ListItem>
        </AuthList>
      </NavigatorContainer>
      {/* End of Navigator Container */}
      
    </NavigationContainer>
  );
}

export default HomeNavigation;