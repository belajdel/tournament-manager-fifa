import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  MyLeaderboardsContainer
} from './MyLeaderboardsStyles';

class MyLeaderboards extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <MyLeaderboardsContainer>

            <h1>MyLeaderboards</h1>
            
          </MyLeaderboardsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyLeaderboards;