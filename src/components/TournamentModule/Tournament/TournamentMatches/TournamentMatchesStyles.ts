import styled from 'styled-components';

export const TournamentMatchesContainer = styled.section`
  background: #F4F4F4;
  border: 1px solid #CCC;
  margin: 20px;
  padding: 20px;
`;

export const MatchesHeader = styled.section`
  padding: 20px;

  & > h1 {
    font-size: 20px;
    text-align: center;
  }
`;

export const MatchesContentContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const TournamentMatchContainer = styled.section`
  padding: 10px;
  width: 50%;
`;
