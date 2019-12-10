import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  FriendsList,
  FriendsHeader,
  MyFriendsContainer
} from './MyFriendsStyles';
import PreviewLinkItem from '../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';
import ColorTypes from '../../../models/ColorTypes';

class MyFriends extends React.Component {
  render() {

    const ChannelList = [1, 2, 3, 4, 5, 6, 7].map(a => (
      <PreviewLinkItem
        key={a}
        buttonHeader="Friend name"
        buttonDescription="Last Active:"
        buttonDescriptionSecondary="Yesterday - 4:04 pm"
        buttonColor={ColorTypes.success}
        to={`/user&u=${'asdsad34'}`}
      />
    ))
    
    return (
      <Wrapper>
        <Container>
          <MyFriendsContainer>

            <FriendsHeader>
              <PreviewLinkItem
                  buttonHeader="Add Friend"
                  buttonDescription="Get started by creating a new tournament"
                  buttonColor={ColorTypes.danger}
                  to="/add"
                />
            </FriendsHeader>

            <FriendsList>

              { ChannelList }
              
            </FriendsList>
            
          </MyFriendsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyFriends;