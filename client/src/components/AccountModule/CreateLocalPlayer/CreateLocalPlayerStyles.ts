import styled from 'styled-components';
import { 
  PUNTIPIN_GRAY_MAIN,
  PUNTIPIN_GRAY_LIGHT, 
} from '../../../constants/COLORS';

export const CreateLocalPlayerContainer = styled.section`
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
  border-bottom: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  padding: 20px 40px;
  margin-bottom: 20px;

  & > h1 {
    font-size: 28px;
    text-align: center;
  }

  & > button {
    color: white;
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
`;

/**
 * Box Container
 */
export const CreateBox = styled.div`
  background: white;
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  margin-bottom: 20px;
  padding: 40px;
  text-align: center;
`;

export const CreateLabel = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  font-size: 24px;
`;

export const CreateLabelNumber = styled.span`
  color: blue;
  font-size: 36px;
  margin: 0 10px;
  font-weight: bold;
`;

export const CreateLabelOptional = styled.span`
  color: gray;
  font-size: 12px;
  margin: 0 10px;
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
  background: white;
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  border-radius: 5px;
  padding: 10px;
  margin: 0 10px;

  &:focus {
    outline: none;
  }
`;

export const LinkContainer = styled(InputContainer)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const FormFooterButtonContainer = styled(InputContainer)`
  display: flex;
  justify-content: center;
`;