import styled, { css } from 'styled-components';
import { PUNTIPIN_BLUE, PUNTIPIN_BLUE_LIGHT } from '../../../constants/COLORS';


export const CreateChannelContainer = styled.section`
  background: white;
  min-height: 100vh;
  padding: 20px 0;

  @media (min-width: 576px) {
    padding: 20px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 992px) {}
`;

/**
 * Header
 */
export const CreateChannelHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid #CCC;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 20px 0;
  position: relative;
  width: 100%;
`;

export const Header = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
`;

export const HeaderButton = styled.button`
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 10px 12px;
  position: absolute;
  right: 0;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }

  &:focus {
    outline: none;
  }
`;

/**
 * Step
 */
export const CreateChannelStep = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 20px 40px;
  margin-bottom: 20px;
`;

interface StepContentProps {
  step?: string;
}

export const StepContent = styled.div`
  margin: 20px 0;
  padding: 20px;

  ${(props: StepContentProps) => (props.step === "two") && css`
    display: flex;
    justify-content: center;
  `}

  ${(props: StepContentProps) => (props.step === "four") && css`
    display: flex;
  `}
  
`;