import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  MyLeaderboardsWrapper,
  MyLeaderboardsContainer
} from './MyLeaderboardsStyles';

class MyLeaderboards extends React.Component {
  render() {
    return (
      <MyLeaderboardsWrapper>
        <Container>
          <MyLeaderboardsContainer>

            <h1>MyLeaderboards</h1>
            
          </MyLeaderboardsContainer>
        </Container>
      </MyLeaderboardsWrapper>
    );
  }
}

export default MyLeaderboards;