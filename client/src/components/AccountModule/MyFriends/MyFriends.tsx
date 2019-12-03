import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  MyFriendsWrapper,
  MyFriendsContainer
} from './MyFriendsStyles';

class MyFriends extends React.Component {
  render() {
    return (
      <MyFriendsWrapper>
        <Container>
          <MyFriendsContainer>

            <h1>MyFriends</h1>
            
          </MyFriendsContainer>
        </Container>
      </MyFriendsWrapper>
    );
  }
}

export default MyFriends;