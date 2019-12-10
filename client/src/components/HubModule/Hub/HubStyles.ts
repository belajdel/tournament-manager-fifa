import styled from 'styled-components';
import { 
  PUNTIPIN_GRAY_LIGHT, PUNTIPIN_BLUE, PUNTIPIN_BLUE_LIGHT, PUNTIPIN_GRAY_MAIN 
} from '../../../constants/COLORS';

export const HubContainer = styled.section`
  min-height: 100vh;
  padding: 20px 0;

  @media (min-width: 576px) {
    padding: 20px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 992px) {
    display: flex;
  }
`;

/**
 * Content
 */
export const HubLeftContainer = styled.div`
  flex: 1;

  @media (min-width: 992px) {
    margin-right: 10px;
  }
`;

export const HubRightContainer = styled.div`
  flex: 1;

  @media (min-width: 992px) {
    margin-left: 10px;
  }
`;

export const HubBox = styled.div`
  background: white;
  box-shadow: 0 1px 3px #666;
  margin-bottom: 16px;
  padding: 10px 0;
`;

/**
 * Footer
 */
export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const FooterButton = styled.button`
  align-items: center;
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 2px;
  display: flex;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 16px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }
`;

export const FooterButtonName = styled.h1`
  border-left: 1px solid white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding-left: 8px;
`;

export const FooterButtonIcon = styled.img`
  display: block;
  margin-right: 10px;
  height: 25px;
  width: 25px;
`;

/**
 * Friend Container
 */
export const HubFriendSearch = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 20px 10px 20px;
  /* padding: 10px; */

  @media (min-width: 576px) {
  }
`;

export const SearchInput = styled.input`
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 10px;
  flex: 1;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 6px 10px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }
`;

export const SearchIcon = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`;