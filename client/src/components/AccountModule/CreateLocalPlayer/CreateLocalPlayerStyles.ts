import styled from 'styled-components';

/**
 * Main Component Container
 */
export const CreateLocalPlayerWrapper = styled.section`
  background: #52AA5E;
`;

export const CreateLocalPlayerContainer = styled.section`
  background: white;
  min-height: 100vh;
  padding: 20px;
`;

/**
 * Header
 */
export const CreateHeader = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #CCC;
  padding: 20px 40px;
  margin-bottom: 20px;

  & > h1 {
    font-size: 28px;
    text-align: center;
  }

  & > button {
    color: white;
    background: red;
    cursor: pointer;
    display: block;
    position: absolute;
    right: 0;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
  }
`;

/**
 * Main Form
 */
export const CreateForm = styled.form`
  padding: 30px;
  border: 1px solid blue;
`;

/**
 * Box Container
 */
export const CreateBox = styled.div`
  border: 1px solid red;
  margin: 20px 0;
  padding: 20px;
  text-align: center;
`;

export const CreateLabel = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const CreateLabelNumber = styled.span`
  color: blue;
  font-size: 36px;
  font-weight: bold;
`;

export const CreateLabelOptional = styled.span`
  color: lightgray;
  font-size: 14px;
  text-transform: uppercase;
`;

export const IconColorsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconColor = styled.button`
  border: none;
  background: blue;
  display: block;
  margin: 10px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;

  &:hover {
    background: lightblue;
  }
`;

/**
 * General
 */
export const Button = styled.button`
  background: red;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  margin: 10px;
  display: block;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background: #F4F4F4;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 12px;
  margin: 0 10px;

  &:focus {
    outline: none;
  }
`;

export const LinkContainer = styled(InputContainer)`
  display: flex;
  justify-content: center;
`;

export const FormFooterButtonContainer = styled(InputContainer)`
  display: flex;
  justify-content: center;
`;