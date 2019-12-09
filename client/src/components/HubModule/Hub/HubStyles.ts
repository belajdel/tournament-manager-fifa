import styled from 'styled-components';
import { 
  PUNTIPIN_GRAY_LIGHT 
} from '../../../constants/COLORS';

export const HubContainer = styled.section`
  display: flex;
  padding-top: 20px;
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
  border-radius: 3px;
  display: block;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 16px;

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
