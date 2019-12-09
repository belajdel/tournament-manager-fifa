import React, { useState } from 'react';

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

/**
 * Icons
 */
import ProfileIcon from '../../../../assets/icons/icon-account.png';
import SettingsIcon from '../../../../assets/icons/icon-settings.png';

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
          </AccountNavDropdown>
        ) : null
      }

    </AccountNavContainer>
  );
}

export default AccountNavigation;