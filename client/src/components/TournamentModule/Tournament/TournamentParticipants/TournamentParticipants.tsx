import React from 'react';

/**
 * Styles
 */
import {
  TournamentParticipantsContainer
} from './TournamentParticipantsStyles';
import PreviewLinkItem from '../../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';
import ColorTypes from '../../../../models/ColorTypes';

class TournamentParticipants extends React.Component {
  render() {
    return (
      <TournamentParticipantsContainer>

        <TournamentParticipantsHeader>
          <h1>All Participants</h1>
        </TournamentParticipantsHeader>

        <TournamentParticipantsContent>
          <ParticipantsLeftContainer>
            <h1>All Members</h1>

            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />
            
            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />

            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />
            
            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />
            
          </ParticipantsLeftContainer>
          <ParticipantsRightContainer>

            <h1>All Local Players</h1>

            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />
            
            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />

            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />
            
            <PreviewLinkItem
              buttonHeader="Eduardo"
              buttonDescription="Last active"
              buttonDescriptionSecondary="Yesterday - 4:04 pm"
              buttonColor={ColorTypes.primary}
              to={`/user&u=${'sased34f'}`}
            />
            
          </ParticipantsRightContainer>
        </TournamentParticipantsContent>
        
      </TournamentParticipantsContainer>
    );
  }
}

export default TournamentParticipants;