import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeNavContainer = styled.section`
  background: #044B7F;
`;

export const NavContainer = styled.nav`
  align-items: center;
  color: white;
  display: flex;
  height: 100px;
  justify-content: space-between;
`;

export const NavHeader = styled.h1`
  font-weight: bold;
  font-size: 40px;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * Form
 */
export const Form = styled.form`
  align-items: flex-end;
  display: flex;
`;

export const InputContainer = styled.div`
  margin: 2px;
  margin: 0 10px;
`;

export const InputLabel = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: none;
  font-size: 15px;
  padding: 4px 6px;
  width: 200px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #01253F;
  background: #0571BF;
  display: block;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 4px 12px;
  white-space: nowrap;

  &:hover {
    background: #044B7F;
  }
`;