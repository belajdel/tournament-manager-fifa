import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: #031D44;
  border: none;
  border-radius: 2px;
  color: #FFF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 12px 30px;
  margin: 0 auto;

  &:hover {
    background: #032559;
  }
`;