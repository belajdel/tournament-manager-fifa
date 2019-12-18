import styled from 'styled-components';
import { 
  DANGER, 
  PUNTIPIN_GREEN,
  PUNTIPIN_GREEN_LIGHT,
  DANGER_LIGHT,
} from '../../../../constants/COLORS';

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 10px 20px;
  margin: 0 5px;
`;

export const SubmitButton = styled(Button)`
  background: ${PUNTIPIN_GREEN};

  &:hover {
    background: ${PUNTIPIN_GREEN_LIGHT};
  }
`;

export const CancelButton = styled(Button)`
  background: ${DANGER};

  &:hover {
    background: ${DANGER_LIGHT};
  }
`;
