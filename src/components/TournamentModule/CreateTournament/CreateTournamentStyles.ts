import styled from 'styled-components';
import { DANGER, DANGER_LIGHT } from '../../../constants/COLORS';

export const CreateTournamentContainer = styled.section`
  background: white;
  min-height: 100vh;

  & > * {
    margin: 20px 0;
    padding: 20px;
  }
`;

export const CreateTournamentHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid #CCC;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 0 20px 0;
  margin: 0 20px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`;

export const HeaderCancelButton = styled.button`
  background: ${DANGER};
  border: none;
  border-radius: 2px;
  color: white;
  padding: 10px 20px;
  position: absolute;
  right: 10px;

  &:hover {
    background: ${DANGER_LIGHT};
  }

  &:focus {
    outline: none;
  }
`;

/**
 * General [Step Shared] Components
 */
export const StepContent = styled.section`
`;

/**
 * [Step Content]
 */
