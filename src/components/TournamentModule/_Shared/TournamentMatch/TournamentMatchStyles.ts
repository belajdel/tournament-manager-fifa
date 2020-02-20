import styled from 'styled-components';
import { PUNTIPIN_GREEN, PUNTIPIN_GREEN_LIGHT, PUNTIPIN_BLUE } from '../../../../constants/COLORS';

export const TournamentMatchContainer = styled.section`
  border: 1px solid #CCC;
  background: white;
  padding: 10px;
`;

/**
 * [Match Containers]
 */
export const MatchHeader = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px 0;
  text-align: center;
`;

export const MatchContent = styled.section`
  display: flex;
`;

/**
 * [Match Player]
 */
const MatchPlayer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  & > h1 {
    font-size: 16px;
    margin-bottom: 4px;
  }
  & > p {
    color: #555;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const MatchHomePlayer = styled(MatchPlayer)`
`;

export const MatchVisitingPlayer = styled(MatchPlayer)`

`;

export const PlayerIcon = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  height: 50px;
  margin: 10px 0 20px 0;
  width: 50px;
`;

/**
 * [Match Score]
 */
export const MatchScore = styled.div`
  padding: 12px 0;
`;

export const ScoreHeader = styled.header`
  align-items: center;
  display: flex;
`;

/**
 * Input
 */
const ScoreInput = styled.input`
  display: block;
  margin: 0 10px;
  padding: 10px;
  width: 50px;
`;

export const HomeScoreInput = styled(ScoreInput)`
  margin-right: 10px;
`;

export const VisitingScoreInput = styled(ScoreInput)`
  margin-left: 10px;
`;

export const ScoreFooter = styled.footer`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScoreButton = styled.button`
  background: ${PUNTIPIN_GREEN};
  border: none;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
  padding: 10px 20px;

  &:hover {
    background: ${PUNTIPIN_GREEN_LIGHT};
  }

  &:focus {
    outline: none;
  }
`;
