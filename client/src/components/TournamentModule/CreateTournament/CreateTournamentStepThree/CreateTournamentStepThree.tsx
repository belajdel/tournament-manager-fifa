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
  StepThreeContainer,
  ContentContainer,
  AddMembersLeftContainer,
  AddMembersRightContainer,
  AddMembersHeader,
  SearchInputContainer,
  SearchInput,
  MembersListContainer,
  PlayersAddedHeader,
  PlayersAddedContent,
  FirstRow,
  SecondRow,
  PlayersAddedLeftContainer,
  PlayersAddedRightContainer,
  PlayersAdded,
  PlayersAddedButton,
  RequestButtonIcon,
  PlayersAddedEmail,
  PlayersAddedInputBox,
  PlayersAddedInput,
  ThirdRow,
  Min,
  Max,
  NumberAdded,
  NumberAddedStrong,
} from './CreateTournamentStepThreeStyles';
import {} from '../CreateTournamentStyles';

/**
 * Types
 */
import ColorTypes from '../../../../models/ColorTypes';

class CreateTournamentStepThree extends React.Component {
  render() {
    return (
      <StepThreeContainer>

        <CreateStepHeader
          number={3}
          title="Add members to tournament"
        />

        <ContentContainer>

          <FirstRow>
            {/* Left Container */}
            <AddMembersLeftContainer>
              <AddMembersHeader>
                <h1>From Channel Members</h1>
                <SearchInputContainer>
                  <SearchInput 
                    placeholder="Search for friend"
                    type="text"
                  />
                </SearchInputContainer>
              </AddMembersHeader>

              <MembersListContainer>

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
                
              </MembersListContainer>
              
            </AddMembersLeftContainer>

            {/* Right Container */}
            <AddMembersRightContainer>
              <AddMembersHeader>
                <h1>From Local Players</h1>
                <SearchInputContainer>
                  <SearchInput 
                    placeholder="Search for a local player"
                    type="text"
                  />
                </SearchInputContainer>
              </AddMembersHeader>

              <MembersListContainer>

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
                
              </MembersListContainer>
              
            </AddMembersRightContainer>
          </FirstRow>

          <SecondRow>

            <PlayersAddedHeader>
              Players Added
            </PlayersAddedHeader>

            <PlayersAddedContent>

              <PlayersAddedLeftContainer>

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
                
              </PlayersAddedLeftContainer>

              <PlayersAddedRightContainer>

                {/* Request Member */}
                <PlayersAdded>
                  <PlayersAddedButton>
                    <RequestButtonIcon
                      alt="requestIcon"
                      src={IconDelete}
                    />
                  </PlayersAddedButton>
                  <PlayersAddedEmail>
                    me@eduardocarlos.ca
                  </PlayersAddedEmail>
                </PlayersAdded>

                {/* Request Member */}
                <PlayersAdded>
                  <PlayersAddedButton>
                    <RequestButtonIcon
                      alt="requestIcon"
                      src={IconDelete}
                    />
                  </PlayersAddedButton>
                  <PlayersAddedEmail>
                    andres.garza@outlook.com
                  </PlayersAddedEmail>
                </PlayersAdded>

                {/* Request Member Input */}
                <PlayersAddedInputBox>
                  <PlayersAddedButton>
                    <RequestButtonIcon
                      alt="requestIcon"
                      src={IconEmail}
                    />
                  </PlayersAddedButton>
                  <PlayersAddedInput 
                    id="inviteRequest"
                    placeholder="Add email address"
                    type="text"
                  />
                </PlayersAddedInputBox>

              </PlayersAddedRightContainer>

            </PlayersAddedContent>
            
          </SecondRow>

          <ThirdRow>
            <Min>Min: {3}</Min>
            <NumberAdded>
              <NumberAddedStrong>{4}</NumberAddedStrong> players added
            </NumberAdded>
            <Max>Max: {64}</Max>
          </ThirdRow>

        </ContentContainer>

      </StepThreeContainer>
    );
  }
}

export default CreateTournamentStepThree;