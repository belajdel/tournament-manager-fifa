import styled, { css } from 'styled-components';
import { 
  PRIMARY,
  SECONDARY,
  SUCCESS,
  DANGER,
  WARNING,
  INFO,
  PRIMARY_LIGHT,
  SECONDARY_LIGHT,
  SUCCESS_LIGHT,
  DANGER_LIGHT,
  WARNING_LIGHT,
  INFO_LIGHT,
} from '../../../../constants/COLORS';

import ColorTypes from '../../../../models/ColorTypes';

/**
 * [Step 1] Color List
 */
export const ColorsList = styled.div`
  display: flex;
  justify-content: center;
`;

interface ColorItemProps {
  buttonColor?: ColorTypes | null;
}

export const ColorItem = styled.button`
  display: block;
  background: red;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
  height: 45px;
  width: 45px;

  ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.primary) && css`background: ${PRIMARY};`}
  ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.secondary) && css`background: ${SECONDARY};`}
  ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.success) && css`background: ${SUCCESS};`}
  ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.danger) && css`background: ${DANGER};`}
  ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.warning) && css`background: ${WARNING};`}
  ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.info) && css`background: ${INFO};`}

  &:hover {
    ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.primary) && css`background: ${PRIMARY_LIGHT};`}
    ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.secondary) && css`background: ${SECONDARY_LIGHT};`}
    ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.success) && css`background: ${SUCCESS_LIGHT};`}
    ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.danger) && css`background: ${DANGER_LIGHT};`}
    ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.warning) && css`background: ${WARNING_LIGHT};`}
    ${(props: ColorItemProps) => (props.buttonColor === ColorTypes.info) && css`background: ${INFO_LIGHT};`} 
  }

  &:focus {
    outline: none;
  }
`;