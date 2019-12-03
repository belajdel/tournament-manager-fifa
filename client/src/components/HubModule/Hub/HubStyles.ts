import styled from 'styled-components';
import { 
  PUNTIPIN_GREEN 
} from '../../../constants/COLORS';

/**
 * Main Wrapper / Container
 */
export const HubWrapper = styled.section`
  background: ${PUNTIPIN_GREEN};
`;

export const HubContainer = styled.section`
  display: flex;
  min-height: 100vh;
`;

/**
 * Content
 */
export const HubLeftContainer = styled.div`
  flex: 1;
`;

export const HubRightContainer = styled.div`
  flex: 1;
`;

export const HubBox = styled.div`
  background: white;
  padding: 20px;
  margin: 20px;
`;

/**
 * Footer
 */
export const FootterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const FooterButton = styled.button`
  background: black;
  border: none;
  border-radius: 5px;
  display: block;
  color: white;
  cursor: pointer;
  padding: 12px 20px;

  &:hover {
    background: #123;
  }
`;
