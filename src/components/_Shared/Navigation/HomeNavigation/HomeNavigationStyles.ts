import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Exterior Container
 */
export const HomeNavContainer = styled.section`
  background: #044B7F;
`;

/**
 * Interior Container
 */
export const NavContainer = styled.nav`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  color: white;
  min-height: 100px;
`;


// Header - Left
export const NavHeader = styled(Link)`
  align-self: center;
  display: block;
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

/**
 * Form
 */
export const Form = styled.form`
`;

export const FormRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const ForgotPasswordLink = styled(Link)`
  color: white;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  left: 230px;
  position: relative;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * Input
 */

export const InputContainer = styled.div`
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

/**
 * Button
 */
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

