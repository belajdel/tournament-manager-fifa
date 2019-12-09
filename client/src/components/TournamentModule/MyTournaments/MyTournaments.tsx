import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  MyTournamentsContainer
} from './MyTournamentsStyles';

class MyTournaments extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <MyTournamentsContainer>

            <h1>MyTournaments</h1>
            
          </MyTournamentsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyTournaments;