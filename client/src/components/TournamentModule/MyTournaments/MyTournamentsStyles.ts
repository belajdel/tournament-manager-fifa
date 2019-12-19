import styled from 'styled-components';

export const MyTournamentsContainer = styled.section`
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

/**
 * Newly added
 */
/**
 * Select Dropdown
 */
export const SelectLeague = styled.select`
  background: white;
  border-radius: 5px;
  border: 1px solid ${PUNTIPIN_GRAY_LIGHT};
  font-size: 15px;
  padding: 10px;
  width: 350px;

  &:focus {
    outline: none;
  }
`;

export const LeagueOption = styled.option`
  background: white;
  margin-bottom: 10px;
  padding: 10px;
`;


export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;