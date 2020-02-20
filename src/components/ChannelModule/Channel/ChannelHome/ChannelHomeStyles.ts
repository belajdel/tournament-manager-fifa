import styled from 'styled-components';
import { PUNTIPIN_BLUE, PUNTIPIN_GREEN } from '../../../../constants/COLORS';

export const ChannelHomeContainer = styled.section`
  margin: 20px;
`;

/**
 * [Header]
 */
export const HomeHeader = styled.header`
  background: #F4F4F4;
  padding: 20px;
  border: 1px solid #CCC;
  margin-bottom: 20px;
  position: relative;
`;

export const HeaderTitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const TitleIconContainer = styled.div`
  margin-right: 10px;
`;

export const TitleIcon = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

export const HeaderTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
`;

/**
 * Text Desc
 */
export const HeaderDescription = styled.p`
  display: flex;
  justify-content: center;
`;

/**
 * [Stat Item]
 */
export const StatItem = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 20px;
`;

export const ItemNumber = styled.span`
  font-size: 32px;
  margin-right: 10px;
  font-weight: bold;
  color: ${PUNTIPIN_GREEN};
`;


/**
 * [Content]
 */
export const HomeContent = styled.section`
  background: #F4F4F4;
  border: 1px solid #CCC;
  display: flex;
  padding: 10px 20px;

  & > * {
    flex: 1;
    padding: 20px;
    width: 50%;
  }
`;

/**
 * [Left Content]
 */
export const ContentLeftContainer = styled.section`

`;

export const ContentHeader = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 18px;
  margin: 10px 0;
`;

export const TournamentsListContainer = styled.section`
`;

/**
 * [Right Content]
 */
export const ContentRightContainer = styled.section`

`;