import styled from 'styled-components';
import { PUNTIPIN_BLUE, PUNTIPIN_BLUE_LIGHT } from '../../../../../constants/COLORS';

export const StepFourContainer = styled.section`

`;

/**
 * [Tournament List]
 */
export const TournamentButtonList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

/**
 * [Tournament Button]
 */
export const TournamentButtonItem = styled.button`
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;
  padding: 10px;
  height: 135px;
  width: 135px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }
`;

export const ButtonIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
`;

export const TournamentTitle = styled.h3`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-top: 6px;
  text-align: center;
  text-transform: uppercase;
`;