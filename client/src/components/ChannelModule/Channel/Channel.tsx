import React from 'react';

/**
 * Components
 */
import ChannelNavigation from '../../_Shared/Navigation/ChannelNavigation/ChannelNavigation';
import ChannelHome from './ChannelHome/ChannelHome';
import ChannelParticipants from './ChannelParticipants/ChannelParticipants';
import ChannelLeaderboards from './ChannelLeaderboards/ChannelLeaderboards';
import ChannelTournaments from './ChannelTournaments/ChannelTournaments';
import ChannelSettings from './ChannelSettings/ChannelSettings';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  ChannelContainer,
  ChannelContent
} from './ChannelStyles';

class Channel extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <ChannelContainer>

            {/* Main [Channel Navigation] */}
            <ChannelNavigation />

            {/* Channel Components */}
            <ChannelContent>

              {/* Home */}
              {/* <ChannelHome /> */}

              {/* Participants */}
              <ChannelParticipants />

              {/* Leaderboards */}
              {/* <ChannelLeaderboards /> */}

              {/* Tournaments */}
              {/* <ChannelTournaments /> */}
              
              {/* Settings */}
              {/* <ChannelSettings /> */}
              
            </ChannelContent>

          </ChannelContainer>
          </Container>
      </Wrapper>
    );
  }
}

export default Channel;