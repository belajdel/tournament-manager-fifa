import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_BLUE_LIGHT, PUNTIPIN_GRAY_MAIN, PUNTIPIN_BLUE } from '../../../../constants/COLORS';

export const MobileNavigationContainer = styled.div`
  background: ${PUNTIPIN_BLUE_LIGHT};
  padding: 6px 0 10px 0;
  position: absolute;
  top: 60px;
  width: 100%;
`;

export const MobileList = styled.nav``;

export const ListItem = styled(Link)`
  align-items: center;
  border-bottom: 1px solid ${PUNTIPIN_GRAY_MAIN};
  display: flex;
  margin: 4px 0;
  padding: 8px 12px;

  &:hover {
    background: ${PUNTIPIN_BLUE};
  }
`;

export const ItemIcon = styled.img`
  display: block;
  height: 30px;
  width: 30px;
`;

export const ItemName = styled.h1`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

/**
 * Button (Logout)
 */
export const ListItemButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 4px 0;
  padding: 8px 12px;
  width: 100%;

  &:hover {
    background: ${PUNTIPIN_BLUE};
  }
`;

export const ItemButtonIcon = styled(ItemIcon)``;

export const ItemButtonName = styled(ItemName)``;