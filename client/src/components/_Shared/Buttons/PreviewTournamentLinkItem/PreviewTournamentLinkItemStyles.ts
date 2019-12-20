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
  PUNTIPIN_BLUE_LIGHT,
} from '../../../../constants/COLORS';

/**
 * Types
 */
import ColorTypes from '../../../../models/ColorTypes';

/**
 * Main Containers
 */
export const PreviewLink = styled(Link)`
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  display: block;
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
 * [Row]
 */
const PreviewRow = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const HeaderRow = styled(PreviewRow)`
  align-items: center;
  display: flex;
  padding-top: 10px;
`;

export const FooterRow = styled(PreviewRow)`
  padding-bottom: 10px;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-left: 16px;
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

/**
 * [Members List]
 */
export const MembersHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-bottom: 4px;
  padding: 10px 0 4px 0;
  text-align: center;
`;

export const MembersList = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const MemberItem = styled(Link)`
  background: ${PUNTIPIN_BLUE_LIGHT};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
  padding: 4px 10px;
  text-align: center;
  width: 50%;
`;
