import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../../styles/Global';
import {
  ChannelNavigationWrapper,
  ChannelNavigationContainer,
  ItemIcon,
  ItemName,
  NavigationItem,
  NavigationLeft,
  NavigationRight
} from './ChannelNavigationStyles';

/**
 * Icons
 */
import Icon from '../../../../assets/icons/icon-account.png';

interface ChannelNavigationProps {
}

function ChannelNavigation(props: ChannelNavigationProps) {
  return (
    <ChannelNavigationWrapper>
      <Container>
        <ChannelNavigationContainer>

          <NavigationLeft>
            <NavigationItem to="/">
              <ItemIcon
                alt="icon-account"
                src={Icon}
              />
              <ItemName>Channel Name</ItemName>
            </NavigationItem>

            <NavigationItem to="/">
              <ItemIcon
                alt="icon-account"
                src={Icon}
              />
              <ItemName>Members &amp; Players</ItemName>
            </NavigationItem>

            <NavigationItem to="/">
              <ItemIcon
                alt="icon-account"
                src={Icon}
              />
              <ItemName>Leaderboards</ItemName>
            </NavigationItem>

            <NavigationItem to="/">
              <ItemIcon
                alt="icon-account"
                src={Icon}
              />
              <ItemName>Tournaments</ItemName>
            </NavigationItem>
          </NavigationLeft>

          <NavigationRight>
            <NavigationItem to="/">
              <ItemIcon
                alt="icon-account"
                src={Icon}
              />
              <ItemName>Settings</ItemName>
            </NavigationItem>
          </NavigationRight>
          
        </ChannelNavigationContainer>
      </Container>
    </ChannelNavigationWrapper>
  );
}

export default ChannelNavigation;