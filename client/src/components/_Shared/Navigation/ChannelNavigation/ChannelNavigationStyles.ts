import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_BLUE } from '../../../../constants/COLORS';

export const ChannelNavigationWrapper = styled.section`
  background: #F4F4F4;
  padding: 0 20px;
`;

export const ChannelNavigationContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const NavigationLeft = styled.div`
  display: flex;
`;

export const NavigationRight = styled.div`
  display: flex;
`;


export const NavigationItem = styled(Link)`
  align-items: center;
  display: flex;
  padding: 10px 12px;

  &:hover {
    background: #E4E4E4;
  }
`;

export const ItemIcon = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`;

export const ItemName = styled.h1`
  color: ${PUNTIPIN_BLUE};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;