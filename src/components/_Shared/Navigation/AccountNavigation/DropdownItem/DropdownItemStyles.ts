import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_BLUE } from '../../../../../constants/COLORS';

export const ItemContainer = styled(Link)`
  display: block;
  padding: 10px 14px;

  &:hover {
    background: ${PUNTIPIN_BLUE};
  }
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
`;

export const ItemIcon = styled.img`
  display: block;
  height: 22px;
  width: 22px;
`;

export const ItemTitle = styled.h1`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 10px;
  margin-left: 8px;
`;