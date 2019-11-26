import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppNavigationWrapper = styled.section`
  background: #044B7F;
`;

export const AppNavigationContainer = styled.section`
  color: white;
  display: flex;
  align-items: center;
  height: 60px;
`;

/**
 * Main Logo Link
 */
export const NavHeader = styled(Link)`
  flex: 0;
  display: block;
  color: white;
  font-weight: bold;
  font-size: 25px;
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

// Link
export const NavLink = styled(Link)`
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;

export const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
`;