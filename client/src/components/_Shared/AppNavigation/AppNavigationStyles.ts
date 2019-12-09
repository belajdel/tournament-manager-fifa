import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_BLUE_LIGHT, PUNTIPIN_BLUE } from '../../../constants/COLORS';

export const AppNavigationWrapper = styled.section`
  background: #044B7F;
`;

export const AppNavigationContainer = styled.section`

  color: white;
  display: flex;
  align-items: center;
  height: 60px;

  /* Extra small devices (portrait phones, less than 576px) */
  /* No media query for xs since this is the default in Bootstrap */

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {

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
`;

/**
 * Main Navigation
 */
export const NavMain = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

// Left
export const NavLeft = styled.nav`
  display: flex;
`;

// Right
export const NavRight = styled.nav`
  display: flex;
`;