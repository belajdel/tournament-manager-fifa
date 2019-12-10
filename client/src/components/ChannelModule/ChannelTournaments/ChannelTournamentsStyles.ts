import styled from 'styled-components';

export const ChannelTournamentsContainer = styled.section`
  min-height: 100vh;
  padding: 20px 0;

  @media (min-width: 576px) {
    padding: 20px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 992px) {
  }
`;

export const TournamentsHeader = styled.header`
  background: white;
  box-shadow: 0 1px 3px #666;
  margin-bottom: 20px;
  width: 100%;
`;

export const TournamentsList = styled.section`
  background: white;
  box-shadow: 0 1px 3px #666;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 20px 0;
  width: 100%;

  & > * {
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      width: 50% !important;
    }
  }
`;