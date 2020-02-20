import React from 'react';

/**
 * Styles
 */
import {
  MyProfileContainer
} from './MyProfileStyles';
import { Container, Wrapper } from '../../../styles/Global';

class MyProfile extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <MyProfileContainer>

            My Profile
            
          </MyProfileContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyProfile;