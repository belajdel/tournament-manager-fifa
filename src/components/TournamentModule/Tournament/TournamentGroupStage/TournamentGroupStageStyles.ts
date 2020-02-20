import styled from 'styled-components';

export const TournamentGroupStageContainer = styled.section`
  background: #F4F4F4;
  border: 1px solid #CCC;
  padding: 20px;
  margin: 20px;
`;

export const GroupStageHeader = styled.section`

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    margin-bottom: 16px;
    padding: 12px;
    text-align: center;
  }
`;

export const GroupStageContent = styled.section`
  display: flex;
`;

/**
 * Content Column
 */
const ContentColumn = styled.section`

`;

export const ContentLeft = styled(ContentColumn)`
  flex: 1;
  padding: 20px;
  width: 50%;
`;

export const ContentRight = styled(ContentColumn)`
  flex: 1;
  padding: 20px;
  width: 50%;
`;

/**
 * [Other Containers]
 */
export const TableContainer = styled.section`
  margin-bottom: 20px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const MatchContainer = styled.section`
  margin-bottom: 16px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
