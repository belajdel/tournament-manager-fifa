import styled from 'styled-components';

export const TournamentParticipantsContainer = styled.section`
  background: #F4F4F4;
  border: 1px solid #CCC;
  padding: 20px;
  margin: 20px;
`;

export const TournamentParticipantsHeader = styled.section`
  padding: 20px;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    text-align: center;
  }
`;

export const TournamentParticipantsContent = styled.section`
  display: flex;
  padding: 20px;
`;

export const ParticipantsLeftContainer = styled.section`
  flex: 1;
  width: 50%;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    margin-bottom: 16px;
    padding: 10px 0;
    text-align: center;
  }
`;

export const ParticipantsRightContainer = styled.section`
  flex: 1;
  width: 50%;

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    margin-bottom: 16px;
    padding: 10px 0;
    text-align: center;
  }
`;
