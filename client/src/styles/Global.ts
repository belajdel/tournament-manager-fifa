import styled from 'styled-components';

export const Container = styled.div`
  /* Extra small devices (portrait phones, less than 576px) */
  /* No media query for xs since this is the default in Bootstrap */
  margin: 0 auto;
  width: 95%;

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    width: 90%;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    width: 85%;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 80%;
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 75%;
  }
  
`;