import React from 'react';
import {
  AppNavigationWrapper,
  AppNavigationContainer,
  NavHeader,
  NavMain,
  NavLeft,
  NavRight,
  NavLink,
  LogoutButton
} from './AppNavigationStyles';
import { Container } from '../../../styles/Global';

class AppNavigation extends React.Component {

  handleLogout = () => {
    
  }
  
  render() {
    return (
      <AppNavigationWrapper>
        <Container>
          <AppNavigationContainer>
  
            <NavHeader to="/hub">
              puntipin
            </NavHeader>
  
            <NavMain>
              <NavLeft>
                <NavLink to="/hub">
                  Hub
                </NavLink>
                <NavLink to="/channels">
                  Channels
                </NavLink>
                <NavLink to="/friends">
                  Friends
                </NavLink>
                <NavLink to="/leaderboards">
                  Leaderboards
                </NavLink>
                <NavLink to="/tournaments">
                  Tournaments
                </NavLink>
              </NavLeft>
  
              <NavRight>
                <NavLink to="/account">
                  Account
                </NavLink>
                <LogoutButton onClick={this.handleLogout}>
                  Logout
                </LogoutButton>
              </NavRight>
            </NavMain>
            
          </AppNavigationContainer>
        </Container>
      </AppNavigationWrapper>
    );
  }
}

export default AppNavigation;