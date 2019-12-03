import styled from 'styled-components';
import { 
  PUNTIPIN_GREEN, 
  PUNTIPIN_GRAY_LIGHT,
  PUNTIPIN_BLUE_LIGHT,
  PUNTIPIN_BLUE,
  FACEBOOK,
  FACEBOOK_LIGHT,
  GOOGLE,
  GOOGLE_LIGHT,
} from '../../../constants/COLORS';

export const SettingsWrapper = styled.section`
  background: ${PUNTIPIN_GREEN};
`;

export const SettingsContainer = styled.section`
  display: flex;
  min-height: 100vh;
  padding: 60px 20px 30px 20px;
`;

export const SettingsLeft = styled.div`
  flex: 1;
  margin: 0 20px;
  `;

export const SettingsRight = styled.div`
  flex: 1;
  margin: 0 20px;
`;

export const SettingsBox = styled.div`
  background: white;
  box-shadow: 0 1px 3px #666;
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  padding: 30px 20px;
  margin-bottom: 20px;
`;

export const BoxHeader = styled.h1`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

/**
 * Input
 */

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const InputSubmitContainer = styled(InputContainer)`
  margin-top: 30px;
`;

export const Input = styled.input`
  border: 1px solid #CCC;
  border-radius: 5px;
  font-size: 15px;
  padding: 8px;
  width: 350px;

  &:focus {
    outline: none;
  }
`;

/**
 * 
 */
export const ThirdPartyBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ThirdPartyContainer = styled.div`
  flex: 1;

  & > header {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin: 20px 0 40px 0;
    text-align: center;
  }
`;

export const ThirdPartyIconContainer= styled.div`
  background: #F4F4F4;
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  border-radius: 50%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 20px;
  width: 150px;
`;

export const ThirdPartyIcon = styled.img`
  display: block;
  object-fit: contain;
  height: 100%;
`;

export const Button = styled.button`
  border: none;
  background: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 12px 20px;
  margin: 0 auto;
`;

export const ThirdPartyFacebook = styled(Button)`
  background: ${FACEBOOK};

  &:hover {
    background: ${FACEBOOK_LIGHT};
  }
`;

export const ThirdPartyGoogle = styled(Button)`
  background: ${GOOGLE};

  &:hover {
    background: ${GOOGLE_LIGHT};
  }
`;

export const ChangePasswordButton = styled(Button)`
  background: ${PUNTIPIN_BLUE};

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }
`;


/**
 * Select Dropdown
 */
export const SelectLeague = styled.select`
  background: white;
  border-radius: 5px;
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  font-size: 15px;
  padding: 10px;
  width: 350px;

  &:focus {
    outline: none;
  }
`;

export const LeagueOption = styled.option`
  background: white;
  margin-bottom: 10px;
  padding: 10px;
`;
