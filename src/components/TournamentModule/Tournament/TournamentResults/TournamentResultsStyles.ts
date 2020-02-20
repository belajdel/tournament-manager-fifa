import styled from 'styled-components';
import { PUNTIPIN_BLUE, PUNTIPIN_GREEN, WARNING, PUNTIPIN_GREEN_LIGHT } from '../../../../constants/COLORS';

export const TournamentResultsContainer = styled.section`
  background: #F4F4F4;
  border: 1px solid #CCC;
  margin: 20px;
  padding: 20px;
`;

/**
 * [Main Header]
 */
export const TournamentResultsHeader = styled.header`
  padding: 20px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: center;
  }
`;

export const TournamentResultsContent = styled.section`
`;

/**
 * [Content Rows]
 */
export const HeaderRow = styled.div`
  padding: 20px;
  display: flex;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderRight = styled.div`
  padding: 20px;
  flex: 1;
`;

export const HeaderIconContainer = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  padding: 20px;
  margin: 0 16px;
`;

export const HeaderIcon = styled.img`
  display: block;
  height: 80px;
  width: 80px;
`;

/**
 * [Tournament Details]
 */
export const TournamentTitle = styled.h1`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  margin-bottom: 8px;
`;

export const TournamentStatus = styled.div`
  background: ${PUNTIPIN_GREEN};
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

export const StatusIcon = styled.img`

`;

export const TournamentType = styled.p`
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
`;

export const TournamentTypeDesc = styled.span`
  color: #333;
`;

export const TournamentDetails = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  padding: 10px;
`;

/**
 * [Stat Number]
 */
export const TournamentStat = styled.p`
  align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  margin: 0 14px;
`;

export const StatNumber = styled.span`
  color: ${PUNTIPIN_BLUE};
  font-size: 32px;
  font-weight: bold;
  margin-right: 4px;
`;

/**
 * [Tournament Placing]
 */
export const PlacingRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 20px;
`;

export const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 10px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    margin: 8px 0;
    text-transform: uppercase;
  }
`;

export const ItemIcon = styled.div`
  background-color: ${WARNING};
  border-radius: 50%;
  height: 85px;
  margin-bottom: 10px;
  width: 85px;
`;

/**
 * [Footer]
 */
export const FooterRow = styled.footer`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FooterButton = styled.button`
  background: ${PUNTIPIN_GREEN};
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px 20px;

  &:hover {
    background: ${PUNTIPIN_GREEN_LIGHT};
  }

  &:focus {
    outline: none;
  }
`;
