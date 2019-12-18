import React from 'react';

/**
 * Components
 */
import NavItem from './NavItem/NavItem';
import AccountNavigation from '../AccountNavigation/AccountNavigation';

/**
 * Icons
 */
import HubIcon from '../../../../assets/icons/icon-hub.png';
import ChannelsIcon from '../../../../assets/icons/icon-channels.png';
import FriendsIcon from '../../../../assets/icons/icon-friends.png';
import LeaderboardsIcon from '../../../../assets/icons/icon-leaderboards-1.png';
import TournamentsIcon from '../../../../assets/icons/icon-tournaments.png';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

/**
 * Styles
 */
import { Container } from '../../../../styles/Global';
import {
  AppNavigationWrapper,
  AppNavigationContainer,
  NavHeader,
  NavMain,
  NavLeft,
  NavRight,
  NavHamburger,
  HamburgerLine,
} from './AppNavigationStyles';

interface AppNavigationProps {

}

interface AppNavigationState {
  mobileActive: boolean;
}

class AppNavigation extends React.Component<AppNavigationProps, AppNavigationState> {
  constructor(props: AppNavigationProps) {
    super(props);
    this.state = {
      mobileActive: false
    };
  }
  
  handleLogout = () => {
    
  }
  
  render() {
    return (
      <AppNavigationWrapper>
        <Container>
          <AppNavigationContainer>
  
            {/* Hamburger Button */}
            <NavHamburger onClick={() => this.setState({ mobileActive: !this.state.mobileActive })}>
              <HamburgerLine></HamburgerLine>
              <HamburgerLine></HamburgerLine>
              <HamburgerLine></HamburgerLine>
            </NavHamburger>
            {/* End of Hamburger Button */}

            {/* Mobile Navigation */}
            {
              this.state.mobileActive ? (
                <MobileNavigation 
                  toggle={() => this.setState({ mobileActive: false })}
                />
              ) : null
            }
            {/* End of Mobile Navigation */}
            
            {/* Navigation Header */}
            <NavHeader to="/hub">
              puntipin
            </NavHeader>
            {/* End of Navigation Header */}
  
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