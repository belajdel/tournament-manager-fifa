import React, { useState } from 'react';

/**
 * Styles
 */
import {
  NavLink,
  NavIcon,
  LinkTitleLeft,
  LinkTitleRight
} from './NavItemStyles';

interface LinkTitleProps {
  icon: any;
  alt: string;
  title: string;
  to: string;
  right?: boolean;
  left?: boolean;
}

function NavItem(props: LinkTitleProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <NavLink 
      to={`/${props.to}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    
      <NavIcon
        src={props.icon}
        alt={props.alt}
      />

      {
        props.right && hovered ? (
          <LinkTitleRight>
            { props.title }
          </LinkTitleRight>
        ) : null
      }

      {
        props.left && hovered ? (
          <LinkTitleLeft>
            { props.title }
          </LinkTitleLeft>
        ) : null
      }
      
    </NavLink>
  );
}

export default NavItem;