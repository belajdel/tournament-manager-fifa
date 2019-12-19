import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  PUNTIPIN_GRAY_LIGHT, 
  PUNTIPIN_BLUE, 
  PRIMARY,
  SECONDARY,
  DANGER,
  SUCCESS,
  WARNING,
  INFO,
  LIGHT,
  DARK,
} from '../../../../constants/COLORS';
import ColorTypes from '../../../../models/ColorTypes';

/**
 * Main Containers
 */
export const PreviewLink = styled(Link)`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  display: flex;
  padding: 10px 16px;
  width: 100%;

  &:hover {
    background: #F4F4F4;
  }

  &:focus {
    outline: none;
  }
`;

/**
 * Main Content
 */
interface PreviewIconProps {
  buttonColor?: ColorTypes | null;
}
export const PreviewIcon = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  display: block;
  height: 35px;
  width: 35px;

  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.primary) && css`background: ${PRIMARY};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.secondary) && css`background: ${SECONDARY};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.success) && css`background: ${SUCCESS};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.danger) && css`background: ${DANGER};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.warning) && css`background: ${WARNING};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.info) && css`background: ${INFO};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.light) && css`background: ${LIGHT};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.dark) && css`background: ${DARK};`}
  ${(props: PreviewIconProps) => (props.buttonColor === ColorTypes.link) && css`background: white;`}
`;

export const PreviewContentContainer = styled.header`
  flex: 1;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-left: 10px;
  padding: 4px 0;
  text-align: left;

  & > h1 {
    color: #333;
    font-weight: bold;
    margin-bottom: 2px;
  }
`;

export const PreviewContentDescription = styled.p`
  color: #666;
  font-size: 13px;
  margin-bottom: 4px;
`;

export const DescriptionSecondary = styled.span`
  color: ${PUNTIPIN_BLUE};
`;