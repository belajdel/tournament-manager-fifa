import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  ChannelsList,
  ChannelsHeader,
  MyChannelsContainer
} from './MyChannelsStyles';
import PreviewLinkItem from '../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';
import ColorTypes from '../../../models/ColorTypes';

class MyChannels extends React.Component {
  render() {

    const ChannelList = [1, 2, 3, 4, 5, 6, 7].map(a => (
      <PreviewLinkItem
        key={a}
        buttonHeader="Channel name"
        buttonDescription="Last Active:"
        buttonDescriptionSecondary="Yesterday - 4:04 pm"
        buttonColor={ColorTypes.secondary}
        to={`/channel&c=${'dsadw3412'}`}
      />
    ))
    
    return (
      <Wrapper>
        <Container>
          <MyChannelsContainer>

            <ChannelsHeader>
              <PreviewLinkItem
                  buttonHeader="Create Channel"
                  buttonDescription="Get started by creating a new channel community"
                  buttonColor={ColorTypes.primary}
                  to="/create/channel"
                />
            </ChannelsHeader>

            <ChannelsList>

              { ChannelList }
              
            </ChannelsList>
            
          </MyChannelsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyChannels;