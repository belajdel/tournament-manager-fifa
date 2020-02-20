import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_BLUE_LIGHT, PUNTIPIN_GRAY_MAIN } from '../../../../constants/COLORS';

export const AppNavigationWrapper = styled.section`
  background: #044B7F;

  @media (min-width: 576px) {
    padding: 0 20px;
  }
`;

export const AppNavigationContainer = styled.section`
  /* Extra small devices (portrait phones, less than 576px) */
  align-items: center;
  color: white;
  display: flex;
  height: 60px;
  justify-content: center;
  position: relative;

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    justify-content: flex-start;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {

  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {

  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    
  }
`;

/**
 * Main Logo Link
 */
export const NavHeader = styled(Link)`
  color: white;
  display: block;
  flex: 0;
  font-size: 30px;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    color: ${PUNTIPIN_GRAY_MAIN};
  }
`;

/**
 * Main Navigation
 */
export const NavMain = styled.nav`
  display: none;

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
`;

// Left
export const NavLeft = styled.nav`
  display: flex;
`;

// Right
export const NavRight = styled.nav`
  display: flex;
`;

/**
 * Hamburger
 */
export const NavHamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  height: 40px;
  left: 16px;
  position: absolute;
  width: 40px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 576px) {
    display: none;
  }

`;

export const HamburgerLine = styled.div`
  background: white;
  border-radius: 2px;
  height: 2px;
  margin: 4px 0;
  width: 100%;
`;