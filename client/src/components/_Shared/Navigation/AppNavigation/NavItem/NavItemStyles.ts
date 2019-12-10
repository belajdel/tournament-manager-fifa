import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PUNTIPIN_BLUE_LIGHT, PUNTIPIN_BLUE } from '../../../../../constants/COLORS';

// Link
export const NavLink = styled(Link)`
  color: white;
  display: block;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 8px 12px;
  position: relative;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
    border-radius: 5px;
    text-decoration: underline;
  }
`;

export const NavIcon = styled.img`
  display: block;
  height: 20px;
  width: 20px;
`;

const LinkTitle = styled.p`
  background: #F4F4F4;
  border-radius: 3px;
  bottom: -35px;
  color: ${PUNTIPIN_BLUE};
  padding: 8px 12px;
  position: absolute;
`;

export const LinkTitleLeft = styled(LinkTitle)`
  left: 0;
`;

export const LinkTitleRight = styled(LinkTitle)`
  right: 0;
`;