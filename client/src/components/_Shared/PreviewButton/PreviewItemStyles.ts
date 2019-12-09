import styled from 'styled-components';
import { 
  PUNTIPIN_GRAY_LIGHT, 
  PUNTIPIN_BLUE, 
  PUNTIPIN_BLUE_LIGHT,
} from '../../../constants/COLORS';

/**
 * Main Containers
 */
export const PreviewButtonContainer = styled.section`
  align-items: center;
  border-bottom: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  display: flex;
  padding: 10px;
  margin: 10px;
  min-width: 500px;
`;

export const PreviewLeftContainer = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const PreviewRightContainer = styled.section`
`;

/**
 * Main Content
 */
export const PreviewIcon = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 50%;
  display: block;
  height: 35px;
  width: 35px;
`;

export const PreviewContentContainer = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-left: 10px;
  padding: 4px 0;

  & > h1 {
    margin-bottom: 4px;
  }
`;

export const PreviewContentDescription = styled.p`
  color: #666;
  font-size: 13px;
  margin-bottom: 10px;
`;

export const DescriptionSecondary = styled.span`
  color: ${PUNTIPIN_BLUE};
`;

export const PreviewButton = styled.button`
  background: ${PUNTIPIN_BLUE};
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 6px 8px;
  font-size: 14px;
  width: 100px;

  &:hover {
    background: ${PUNTIPIN_BLUE_LIGHT};
  }
`;