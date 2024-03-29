import styled from 'styled-components';
import { PUNTIPIN_BLUE_LIGHT, PUNTIPIN_BLUE } from '../../../../constants/COLORS';

export const AccountNavContainer = styled.button`
  display: none;

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    display: block;
    background: none;
    border: none;
    border-radius: 2px;
    box-shadow: 0 2px 3px solid #666;
    cursor: pointer;
    position: relative;
    padding: 6px 20px 6px 10px;
    margin-left: 10px;
    width: 175px;

    &:hover {
      background: ${PUNTIPIN_BLUE_LIGHT};
    }

    &:focus {
      outline: none;
    }
  }
`;

/**
 * Display of Nav
 */
export const AccountNavDisplay = styled.nav`
  align-items: center;
  display: flex;
`;

export const DisplayIcon = styled.div`
  background: #EAD94C;
  box-shadow: 0 1px 1px solid #666;
  border-radius: 5px;
  display: block;
  height: 25px;
  width: 25px;
`;

export const DisplayInfo = styled.header`
  margin-left: 8px;
  
  & > h1 {
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: #F4F4F4;
  }
`;
/**
 * End of Display Nav
 */

export const AccountNavDropdown = styled.nav`
  background: ${PUNTIPIN_BLUE_LIGHT};
  position: absolute;
  top: 45px;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const DropdownHeader = styled.h1`
  background: ${PUNTIPIN_BLUE};
  color: #F4F4F4;
`;
