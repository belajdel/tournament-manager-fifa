import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  MyTournamentsWrapper,
  MyTournamentsContainer
} from './MyTournamentsStyles';

class MyTournaments extends React.Component {
  render() {
    return (
      <MyTournamentsWrapper>
        <Container>
          <MyTournamentsContainer>

            <h1>MyTournaments</h1>
            
          </MyTournamentsContainer>
        </Container>
      </MyTournamentsWrapper>
    );
  }
}

export default MyTournaments;