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

class MyChannels extends React.Component {
  render() {
    return (
      <MyChannelsWrapper>
        <Container>
          <MyChannelsContainer>

            <h1>MyChannels</h1>

            <PreviewItem
              buttonHeader="Create Channel"
              buttonDescription="Get started by creating a new channel community"
              buttonDescriptionSecondary=""
              buttonCallback={() => console.log('Created')}
              buttonName="Create"
            />
            
          </MyChannelsContainer>
        </Container>
      </MyChannelsWrapper>
    );
  }
}

export default MyChannels;