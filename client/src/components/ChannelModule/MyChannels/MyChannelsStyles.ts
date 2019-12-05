import styled from 'styled-components';
import { 
  PUNTIPIN_GREEN,
} from '../../../constants/COLORS';

export const MyChannelsWrapper = styled.section`
  background: ${PUNTIPIN_GREEN};
`;

export const MyChannelsContainer = styled.section`
  background: white;
  min-height: 100vh;
  padding-top: 30px;

  & > header {
    display: flex;
    justify-content: center;
  }
`;
