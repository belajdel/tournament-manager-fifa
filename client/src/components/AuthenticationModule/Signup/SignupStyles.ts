import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignupWrapper = styled.section`
  background: #F4F4F4;
`;

export const SignupContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 20px;
  margin-bottom: 100px;
  width: 600px;

  & > h1 {
    color: #044B7F;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #999;
  padding: 12px 10px;
  margin-bottom: 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: #0571BF;
  border: 1px solid #01253F;
  border-radius: 2px;
  color: #FFF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  margin: 0 auto;

  &:hover {
    background: #044B7F;
  }
`;

export const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

export const ForgotPasswordLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }
`;