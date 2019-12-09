import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  MyFriendsContainer
} from './MyFriendsStyles';

class MyFriends extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <MyFriendsContainer>

            <h1>MyFriends</h1>
            
          </MyFriendsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyFriends;