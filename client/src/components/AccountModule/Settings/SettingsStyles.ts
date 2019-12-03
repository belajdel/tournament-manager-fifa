import styled from 'styled-components';

export const SettingsWrapper = styled.section`
  background: #52AA5E;
`;

export const SettingsContainer = styled.section`
  /* background: #044B7F; */
  background: #F4F4F4;
  display: flex;
  height: 100vh;
  padding: 40px 20px 30px 20px;
`;

export const SettingsLeft = styled.div`
  flex: 1;
`;

export const SettingsRight = styled.div`
  flex: 1;
`;

export const SettingsBox = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;

export const BoxHeader = styled.h1`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: center;
`;

/**
 * Input
 */

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  border: 1px solid #CCC;
  border-radius: 5px;
  padding: 8px;
  width: 80%;

  &:focus {
    outline: none;
  }
`;

/**
 * 
 */
export const ThirdPartyBox = styled.div`
  display: flex;
  background: lightgray;
  justify-content: space-around;
  margin: 20px 0;
`;

export const ThirdPartyContainer = styled.div`

  & > header {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: center;
    margin: 10px 0;
  }
`;

export const ThirdPartyIconContainer= styled.div`
  border: 1px solid red;
  border-radius: 50%;
  height: 150px;
  overflow: hidden;
  width: 150px;
`;

export const ThirdPartyIcon = styled.img`
  display: block;
  object-fit: contain;
  height: 100%;
  /* width: 100%; */
`;

export const ThirdPartyButton = styled.button`
  border: none;
  background: none;
  margin: 20px;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ThirdPartyFacebook = styled(ThirdPartyButton)`
  background: #1778F2;
`;

export const ThirdPartyGoogle = styled(ThirdPartyButton)`
  background: #DB4437;
`;
