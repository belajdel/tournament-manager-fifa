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
  color: white;
  display: block;
  flex: 0;
  font-size: 25px;
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

// Link
export const NavLink = styled(Link)`
  color: white;
  display: block;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 8px 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;