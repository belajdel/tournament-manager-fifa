import styled from 'styled-components';
import { DANGER_LIGHT, DANGER, SUCCESS, SUCCESS_LIGHT } from '../../../../../constants/COLORS';

export const StepSixContainer = styled.section`

`;

export const CreateTournamentFooter = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FooterButton = styled.button`
  border: none;
  border-radius: 2px;
  display: block;
  cursor: pointer;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 0 10px;
  padding: 10px 20px;

  &:focus {
    outline: none;
  }
`;

export const CreateButton = styled(FooterButton)`
  background: ${SUCCESS};

  &:hover {
    background: ${SUCCESS_LIGHT};
  }
`;

export const CancelButton = styled(FooterButton)`
  background: ${DANGER};

  &:hover {
    background: ${DANGER_LIGHT}
  }
`;