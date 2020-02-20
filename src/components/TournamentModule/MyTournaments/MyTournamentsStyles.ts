import styled from 'styled-components';
import { 
  PUNTIPIN_GRAY_LIGHT, 
  PUNTIPIN_BLUE 
} from '../../../constants/COLORS';

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
 * [Query Menu]
 */
export const TournamentsQueryContainer = styled.section`
  background: white;
  display: flex;
  padding: 16px 0;
  margin-bottom: 20px;

  & > * {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    width: 50%;
  }
`;

export const QueryLeftContainer = styled.section`
`;

export const QueryRightContainer = styled.section`
`;

/**
 * Select Dropdown
 */
export const SelectInput = styled.select`
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

export const InputOption = styled.option`
`;


export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * [Search Input]
 */
export const QuerySearchInputContainer = styled.div`
  background: ${PUNTIPIN_BLUE};
  border-radius: 2px;
  display: flex;
`;


export const SearchInputIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SearchInputIcon = styled.img`
  display: block;
  height: 20px;
  width: 20px;
`;

export const QuerySearchInput = styled.input`
  border: 1px solid #CCC;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 10px;
  min-width: 350px;
  
  &:focus {
    outline: none;
  }
`;