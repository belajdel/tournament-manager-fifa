import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  ChannelsList,
  MyChannelsContainer
} from './MyChannelsStyles';
import PreviewItem from '../../_Shared/PreviewButton/PreviewItem';
import PreviewChannelItem from '../_Shared/PreviewChannelItem/PreviewChannelItem';

class MyChannels extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <MyChannelsContainer>

            <header>
              <PreviewItem 
                buttonName="Create"
                buttonDescription="Get started by creating a new channel"
                buttonCallback={() => console.log()}
                buttonDescriptionSecondary=""
                buttonHeader="Create Channel"
              />
            </header>

            <ChannelsList>
              <PreviewChannelItem />
              <PreviewChannelItem />
              <PreviewChannelItem />
              <PreviewChannelItem />
              <PreviewChannelItem />
            </ChannelsList>
            
          </MyChannelsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyChannels;