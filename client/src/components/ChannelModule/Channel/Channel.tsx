import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  ChannelContainer,
  ChannelWrapper,
} from './ChannelStyles';
import ChannelNavigation from '../../_Shared/Navigation/ChannelNavigation/ChannelNavigation';

class Channel extends React.Component {
  render() {
    return (
      <ChannelWrapper>

        <ChannelNavigation />
        
        <Container>
        </Container>
        
          <ChannelContainer>

            {/* Channel Navigation */}
            

          </ChannelContainer>
      </ChannelWrapper>
    );
  }
}

export default Channel;