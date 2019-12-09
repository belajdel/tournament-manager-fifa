import React from 'react';

/**
 * Styles
 */
import {
  Item,
  ItemContainer,
  ItemIcon,
  ItemTitle
} from './DropdownItemStyles';

interface DropdownItemProps {
  alt: string;
  icon: any;
  title: string;
  to: string;
}

function DropdownItem(props: DropdownItemProps) {
  return (
    <ItemContainer to={`/${props.to}`}>
      <Item>
        <ItemIcon 
          alt={props.alt}
          src={props.icon}
        />

        <ItemTitle>{ props.title }</ItemTitle>
      </Item>
    </ItemContainer>
  );
}

export default DropdownItem;