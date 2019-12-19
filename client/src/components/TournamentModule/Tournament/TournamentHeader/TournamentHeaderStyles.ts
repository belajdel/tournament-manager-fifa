import styled from 'styled-components';
import { PUNTIPIN_BLUE, PUNTIPIN_BLUE_LIGHT, PUNTIPIN_GREEN } from '../../../../constants/COLORS';

export const TournamentHeaderContainer = styled.section`
  background: #F4F4F4;
  border: 1px solid #CCC;
  display: flex;
  margin: 10px 20px;
  padding: 20px;

  & > * {
    padding: 20px;
  }
`;

export const HeaderLeft = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const HeaderCenter = styled.section`
  display: flex;
  flex: 0;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderRight = styled.section`
  flex: 1;
`;

/**
 * [Left Container]
 */
export const LeftIconContainer = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  padding: 20px;
`;

export const LeftIcon = styled.img`
  display: block;
  height: 60px;
  width: 60px;
`;

export const LeftContent = styled.div`
  margin-left: 20px;
  width: 100%;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const TournamentType = styled.p`
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const TournamentTypeDesc = styled.span`
  color: #333;
`;

export const LeftFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TournamentParticipants = styled.p`
  align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin-top: 10px;
`;

export const ParticipantsNumber = styled.span`
  color: red;
  font-weight: bold;
  font-size: 36px;
  margin-right: 10px;
`;

/**
 * [Center Container]
 */
export const CenterButton = styled.button`
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 4px 0;
  display: block;
  padding: 10px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }

  &:focus {
    outline: none;
  }
`;

export const CenterButtonIcon = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`;

/**
 * [Right Container]
 */
export const RightHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const DateTitle = styled.p`
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const DateDesc = styled.span`
  color: #333;
`;

export const RightPlacing = styled.section`
  display: flex;
  justify-content: center;
`;

export const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0 16px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const PlaceIcon = styled.div`
  align-items: center;
  background: #C4C4C4;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  height: 45px;
  justify-content: center;
  margin-bottom: 16px;
  padding: 10px;
  width: 45px;
`;

export const SettingsButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
    font-size: 15px;
    text-transform: uppercase;
  }
`;

export const SettingsIconContainer = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  padding: 10px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }
`;

export const SettingsIcon = styled.img`
  display: block;
  height: 30px;
  width: 30px;
`;
