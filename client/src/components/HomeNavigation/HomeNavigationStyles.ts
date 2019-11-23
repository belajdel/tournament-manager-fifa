import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  align-items: center;
  justify-content: flex-end;
  background: #F4F4F4;
  display: flex;
  padding: 12px 28px;
`;

export const NavHeader = styled.h1`
  font-weight: bold;
  font-size: 25px;
  flex: 0;
  margin-right: 10px;
`;

// Navigator Container
export const NavigatorContainer = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

// Main List
export const NavList = styled.ul`
  display: flex;
`;

// Auth List (Right)
export const AuthList = styled.ul`
  align-items: center;
  display: flex;
`;

export const ListItem = styled.li`
  align-items: center;
  display: block;
  padding: 12px 18px;
`;

export const ListItemLink = styled(Link)`
  color: darkblue;

  &:hover {
    color: blue;
  }
`;