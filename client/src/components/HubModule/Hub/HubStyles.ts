import styled from 'styled-components';
import { 
  PUNTIPIN_GREEN, PUNTIPIN_GREEN_LIGHT, PUNTIPIN_GRAY_LIGHT 
} from '../../../constants/COLORS';

/**
 * Main Wrapper / Container
 */
export const HubWrapper = styled.section`
  background: 
    repeating-linear-gradient(191deg, ${PUNTIPIN_GREEN} 2px, ${PUNTIPIN_GREEN_LIGHT} 3px, ${PUNTIPIN_GREEN_LIGHT} 4px, ${PUNTIPIN_GREEN} 7px);
  padding-top: 50px;
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
  box-shadow: 0 1px 3px #666;
  padding: 15px;
  margin: 0 20px 30px 20px;
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

/**
 * Friend Container
 */
export const HubFriendSearch = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 20px 10px 20px;
`;

export const SearchInput = styled.input`
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  padding: 10px;
  width: 300px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  border: none;
  padding: 12px 20px;

  &:hover {
    background: #333;
  }
`;
