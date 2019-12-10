import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  ChannelsList,
  MyChannelsContainer
} from './MyChannelsStyles';
import PreviewItem from '../../_Shared/Buttons/PreviewButton/PreviewItem';
import ColorTypes from '../../../models/ColorTypes';

class MyChannels extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <MyChannelsContainer>

            <header>
              <PreviewItem
                  buttonHeader="Create Channel"
                  buttonDescription="Get started by creating a new channel community"
                  buttonDescriptionSecondary=""
                  buttonCallback={() => console.log('Created')}
                  buttonName="Create"
                  buttonColor={ColorTypes.primary}
                />
            </header>

            <ChannelsList>
            </ChannelsList>
            
          </MyChannelsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyChannels;