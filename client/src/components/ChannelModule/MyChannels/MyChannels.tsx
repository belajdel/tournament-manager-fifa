import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  MyChannelsWrapper,
  MyChannelsContainer
} from './MyChannelsStyles';
import PreviewItem from '../../_Shared/PreviewButton/PreviewItem';
import PreviewChannelItem from '../_Shared/PreviewChannelItem/PreviewChannelItem';

class MyChannels extends React.Component {
  render() {
    return (
      <MyChannelsWrapper>
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

            <h1>MyChannels</h1>

            <PreviewChannelItem 

            />
            
          </MyChannelsContainer>
        </Container>
      </MyChannelsWrapper>
    );
  }
}

export default MyChannels;