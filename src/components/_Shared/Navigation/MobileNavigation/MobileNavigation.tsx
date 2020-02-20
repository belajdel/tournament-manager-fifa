import React from 'react';

/**
 * Styles
 */
import {
  MobileNavigationContainer,
  MobileList,
  ListItem,
  ItemIcon,
  ItemName,
  ListItemButton,
  ItemButtonIcon,
  ItemButtonName,
} from './MobileNavigationStyles';

/**
 * Icons
 */
import IconExample from '../../../../assets/icons/icon-account.png';

interface MobileNavigationProps {
  toggle: any;
}

function handleLogout() {

}

function MobileNavigation(props: MobileNavigationProps) {
  return (
    <MobileNavigationContainer>
      <MobileList>
        <ListItem onClick={props.toggle} to="/hub">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>Hub</ItemName>
        </ListItem>
        <ListItem onClick={props.toggle} to="/channels">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>My Channels</ItemName>
        </ListItem>
        <ListItem onClick={props.toggle} to="/tournaments">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>My Tournaments</ItemName>
        </ListItem>
        <ListItem onClick={props.toggle} to="/friends">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>My Friends</ItemName>
        </ListItem>
        <ListItem onClick={props.toggle} to="/leaderboards">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>Leaderboards</ItemName>
        </ListItem>
        <ListItem onClick={props.toggle} to="/profile">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>My Profile</ItemName>
        </ListItem>
        <ListItem onClick={props.toggle} to="/settings">
          <ItemIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemName>Settings</ItemName>
        </ListItem>
        <ListItemButton onClick={handleLogout}>
          <ItemButtonIcon 
            src={IconExample}
            alt="icon"
          />
          <ItemButtonName>Log Out</ItemButtonName>
        </ListItemButton>
      </MobileList>
    </MobileNavigationContainer>
  );
}

export default MobileNavigation;