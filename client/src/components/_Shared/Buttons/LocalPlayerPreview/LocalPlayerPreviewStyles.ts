import styled from 'styled-components';

export const LocalPlayerPreviewContainer = styled.section`
  align-items: center;
  border: 2px solid blue;
  max-width: 600px;
  min-width: 600px;
  
  display: flex;
  justify-content: space-between;
`;

/**
 * Icon & Text Container
 */
export const LocalPlayerPreviewLeft = styled.div`
  align-items: center;
  display: flex;
`;

/**
 * Button Container
 */
export const LocalPlayerPreviewRight = styled.div`

`;


export const LocalPlayerPreviewIcon = styled.div`
  background: blue;
  border-radius: 50%;
  height: 75px;
  width: 75px;
`;

export const LocalPlayerPreviewInfo = styled.div`
  background: orange;

  & > h1 {
    font-weight: bold;
  }
`;


export const InfoActivity = styled.p`
  color: gray;
`;

export const ActivityDate = styled.span`
  color: blue;
`;


export const LocalPlayerPreviewButton = styled.button`
  border: none;
  background: blue;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
`;