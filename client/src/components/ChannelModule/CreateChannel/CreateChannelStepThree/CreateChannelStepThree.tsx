import React from 'react';

/**
 * Components
 */
import CreateStepHeader from '../../../_Shared/CreateStepHeader/CreateStepHeader';
import PreviewLinkItem from '../../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';

/**
 * Icons
 */
import IconDelete from '../../../../assets/icons/icon-delete.png';
import IconEmail from '../../../../assets/icons/icon-email.png';

/**
 * Styles
 */
import {
  CreateChannelStep,
  StepContent
} from '../CreateChannelStyles';

import {
  InviteContainerLeft,
  InviteContainerRight,
  InviteHeading,
  InviteHeader,
  InviteSearchInput,
  InviteSearchButton,
  InviteFriendsList,
  InviteRequestInputBox,
  InviteRequestButton,
  RequestButtonIcon,
  InviteRequest,
  InviteRequestEmail,
  InviteRequestInput,
} from './CreateChannelStepThreeStyles';

/**
 * Types
 */
import ColorTypes from '../../../../models/ColorTypes';

class CreateChannelStepThree extends React.Component {
  render() {
    return(
      <CreateChannelStep>
        
        <CreateStepHeader 
          number={3}
          title="Invite friends"
        />
        
        <StepContent step="four">

          {/* Container Left */}
          <InviteContainerLeft>
            <InviteHeading>Invite Friends</InviteHeading>
            <InviteHeader>
              <InviteSearchInput 
                placeholder="Search for friend"
                type="text"
              />
              <InviteSearchButton>View All</InviteSearchButton>
            </InviteHeader>

            <InviteFriendsList>
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
            </InviteFriendsList>
            
          </InviteContainerLeft>
          {/* End of Container Left */}


          {/* Container Right */}
          <InviteContainerRight>

            <InviteHeading>
              Send Invite Link by Email
            </InviteHeading>

            {/* Request Member */}
            <InviteRequest>
              <InviteRequestButton>
                <RequestButtonIcon
                  alt="requestIcon"
                  src={IconDelete}
                />
              </InviteRequestButton>
              <InviteRequestEmail>
                me@eduardocarlos.ca
              </InviteRequestEmail>
            </InviteRequest>

            {/* Request Member */}
            <InviteRequest>
              <InviteRequestButton>
                <RequestButtonIcon
                  alt="requestIcon"
                  src={IconDelete}
                />
              </InviteRequestButton>
              <InviteRequestEmail>
                andres.garza@outlook.com
              </InviteRequestEmail>
            </InviteRequest>

            {/* Request Member Input */}
            <InviteRequestInputBox>
              <InviteRequestButton>
                <RequestButtonIcon
                  alt="requestIcon"
                  src={IconEmail}
                />
              </InviteRequestButton>
              <InviteRequestInput 
                id="inviteRequest"
                placeholder="Add email address"
                type="text"
              />
            </InviteRequestInputBox>
            
          </InviteContainerRight>
          {/* End of Container Right */}
          
        </StepContent>
      </CreateChannelStep>
    );
  }
}

export default CreateChannelStepThree;