import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px;
`;

export const FormHeader = styled.header`
  margin-bottom: 16px;

  & > h1 {
    color: #044B7F;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  & > p {
    color: #044B7F;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #CCC;;
  border-radius: 2px;
  padding: 12px 10px;
  font-size: 16px;
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
  margin: 0 10px;

  &:hover {
    background: #044B7F;
  }
`;

export const FacebookButton = styled(Button)`
  background: #1778F2;
`;

export const GoogleButton = styled(Button)`
  background: #DB4437;
`;


export const FooterContainer = styled.div`
  & > p {
    color: #044B7F;
    font-size: 18px;
    padding: 16px 0 12px 0;
    text-align: center;
  }
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;


export const FormSubmitContainer = styled(InputContainer)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;