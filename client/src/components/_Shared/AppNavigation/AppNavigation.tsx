import React from 'react';
import {
  AppNavigationWrapper,
  AppNavigationContainer,
  NavHeader,
  NavMain,
  NavLeft,
  NavRight,
} from './AppNavigationStyles';
import { Container } from '../../../styles/Global';

/**
 * Icons
 */
import HubIcon from '../../../assets/icons/icon-hub.png';
import ChannelsIcon from '../../../assets/icons/icon-channels.png';
import FriendsIcon from '../../../assets/icons/icon-friends.png';
import LeaderboardsIcon from '../../../assets/icons/icon-leaderboards-1.png';
import TournamentsIcon from '../../../assets/icons/icon-tournaments.png';
import NavItem from './NavItem/NavItem';
import AccountNavigation from './AccountNavigation/AccountNavigation';

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
                
                <NavItem 
                  alt="Hub"
                  icon={HubIcon}
                  title="Hub"
                  to="hub"
                  left
                />

                <NavItem 
                  alt="Channels"
                  icon={ChannelsIcon}
                  title="Channels"
                  to="channels"
                  left
                />

                <NavItem 
                  alt="Tournaments"
                  icon={TournamentsIcon}
                  title="Tournaments"
                  to="tournaments"
                  left
                />

              </NavLeft>
  
              <NavRight>

                <NavItem 
                  alt="Friends"
                  icon={FriendsIcon}
                  title="Friends"
                  to="friends"
                  right
                />

                <NavItem 
                  alt="Leaderboards"
                  icon={LeaderboardsIcon}
                  title="Leaderboards"
                  to="leaderboards"
                  right
                />
        
                <AccountNavigation 
                  username="Eduardo"
                />
          
              </NavRight>
            </NavMain>
            
          </AppNavigationContainer>
        </Container>
      </AppNavigationWrapper>
    );
  }
}

export default AppNavigation;