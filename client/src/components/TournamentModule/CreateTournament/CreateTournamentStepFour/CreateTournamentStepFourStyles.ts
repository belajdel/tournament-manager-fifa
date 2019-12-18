import styled from 'styled-components';
import { PUNTIPIN_BLUE } from '../../../../constants/COLORS';

export const StepFourContainer = styled.section`

`;

/**
 * [Tournament List]
 */
export const TournamentButtonList = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * [Tournament Button]
 */
export const TournamentButtonItem = styled.button`
  background: ${PUNTIPIN_BLUE};
  border: none;
  cursor: pointer;
  display: block;
  margin: 0 10px;

  &:hover {
    background: #F4F4F4;
  }
`;

export const ButtonIcon = styled.img`
  display: block;
  height: 100px;
  width: 100px;
`;

export const TournamentTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: center;
`;