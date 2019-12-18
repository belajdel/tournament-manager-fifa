import styled from 'styled-components';
import { PUNTIPIN_BLUE, PUNTIPIN_BLUE_LIGHT } from '../../../../constants/COLORS';

export const TournamentGroupStageContainer = styled.section`

`;

/**
 * [Row]
 */
export const GroupStageRow = styled.div`
  display: flex;
  padding: 20px;
`;

export const TableContainer = styled.div`
  padding: 0 10px;
  width: 50%;
`;

/**
 * [Shuffle Row]
 */
export const ShuffleRow = styled(GroupStageRow)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const ShuffleButton = styled.button`
  align-items: center;
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }

  &:focus {
    outline: none;
  }
`;

export const ShuffleIcon = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`;

export const ShuffleTitle = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-left: 10px;
`;

/**
 * [Footer Row]
 */
export const FooterRow = styled(GroupStageRow)`
  display: flex;
  justify-content: center;
`;

export const FooterInputContainer = styled.div`
  margin-bottom: 10px;
`;

export const FooterInput = styled.input`
  background: white;
  border: 1px solid #CCC;
  border-radius: 2px;
  display: block;
  min-width: 400px;
  padding: 8px;
  margin: 0 10px;

  &:focus {
    outline: none;
  }
`;