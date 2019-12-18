import React, { useState } from 'react';

/**
 * Icons
 */
import ProfileIcon from '../../../../assets/icons/icon-account.png';
import SettingsIcon from '../../../../assets/icons/icon-settings.png';
import LogoutIcon from '../../../../assets/icons/icon-exit.png';

/**
 * Styles
 */
import {
  AccountNavContainer,
  AccountNavDisplay,
  DisplayIcon,
  DisplayInfo,
  AccountNavDropdown,
  DropdownHeader
} from './AccountNavigationStyles';
import DropdownItem from './DropdownItem/DropdownItem';

interface AccountNavigationProps {
  username: string;
}

function AccountNavigation(props: AccountNavigationProps) {
  const [active, updateActive] = useState(false);
  
  return (
    <AccountNavContainer onClick={() => updateActive(!active)}>

      <AccountNavDisplay>
        <DisplayIcon></DisplayIcon>
        <DisplayInfo>
          <h1>{props.username}</h1>
        </DisplayInfo>
      </AccountNavDisplay>

      {
        active ? (
          <AccountNavDropdown>
            <DropdownHeader></DropdownHeader>
            <DropdownItem 
              alt="profile"
              icon={ProfileIcon}
              to="profile"
              title="My Profile"
            />
            <DropdownItem 
              alt="settings"
              icon={SettingsIcon}
              to="settings"
              title="Settings"
            />
            <DropdownItem 
              alt="logout"
              icon={LogoutIcon}
              to="logout"
              title="Logout"
            />
          </AccountNavDropdown>
        ) : null
      }

    </AccountNavContainer>
  );
}

export default AccountNavigation;