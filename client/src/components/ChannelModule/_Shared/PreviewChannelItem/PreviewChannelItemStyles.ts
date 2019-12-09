import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_GRAY_LIGHT, PUNTIPIN_GREEN, PUNTIPIN_BLUE, PUNTIPIN_GRAY_MAIN } from '../../../../constants/COLORS';

export const PreviewChannelItemContainer = styled.section`
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  padding: 20px;
`;

export const ChannelItemMain = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const MainLeftContainer = styled.div`
  display: flex;
  flex: 1 1;
`;

export const MainIcon = styled.div`
  background: ${PUNTIPIN_GREEN};
  border-radius: 50%;
  display: block;
  height: 50px;
  margin-right: 16px;
  width: 50px;
`;

export const MainContentContainer = styled.div`

  > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const ContentDescription = styled.div`

  & > p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;    
    margin-bottom: 4px;
    
    & > span {
      color: ${PUNTIPIN_BLUE};
    }
  }
`;

export const MainRightContainer = styled.div`
`;

export const MainButton = styled.button`
  background: #333;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 12px 20px;

  &:hover {
    background: black;
  }
`;

export const ChannelItemFooter = styled.footer`
  background: ${PUNTIPIN_GRAY_MAIN};
  border-radius: 4px;
  margin: 16px 0;
  padding: 20px 0;
`;

export const FooterHeader = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  padding-bottom: 12px;
  text-align: center;
`;

export const FooterMembersList = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const FooterMember = styled(Link)`
  background: #E9E9E9;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  width: calc(50% - 20px);

  &:hover {
    text-decoration: underline;
  }
`;
