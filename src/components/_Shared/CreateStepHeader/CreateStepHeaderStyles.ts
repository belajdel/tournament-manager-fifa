import styled from 'styled-components';
import { PUNTIPIN_BLUE_LIGHT } from '../../../constants/COLORS';

export const StepHeader = styled.h2`
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 16px;
  text-align: center;
`;

export const StepNumber = styled.span`
  color: ${PUNTIPIN_BLUE_LIGHT};
  font-weight: bold;
  font-size: 36px;
`;