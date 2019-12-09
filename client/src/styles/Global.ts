import styled from 'styled-components';
import { PUNTIPIN_GREEN, PUNTIPIN_GREEN_LIGHT } from '../constants/COLORS';

export const Container = styled.div`
  /* Extra small devices (portrait phones, less than 576px) */
  /* No media query for xs since this is the default in Bootstrap */
  margin: 0 auto;
  width: 95%;

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    /* width: 90%; */
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    /* width: 85%; */
    width: 90%;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    
  }
  
`;

export const Wrapper = styled.section`
  background: 
    repeating-linear-gradient(191deg, ${PUNTIPIN_GREEN} 2px, ${PUNTIPIN_GREEN_LIGHT} 3px, ${PUNTIPIN_GREEN_LIGHT} 4px, ${PUNTIPIN_GREEN} 7px);
  min-height: 100vh;
`;