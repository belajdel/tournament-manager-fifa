import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  FootterButtonContainer,
  FooterButton,
  HubBox,
  HubWrapper,
  HubContainer,
  HubLeftContainer,
  HubRightContainer,
  HubFriendSearch,
  SearchInput,
  SearchButton,
} from './HubStyles';
import PreviewItem from '../../_Shared/PreviewButton/PreviewItem';

class Hub extends React.Component {
  render() {
    return (
      <HubWrapper>
        <Container>
          <HubContainer>

            <HubLeftContainer>

              <HubBox>

                <PreviewItem
                  buttonHeader="Create Channel"
                  buttonDescription="Get started by creating a new channel community"
                  buttonDescriptionSecondary=""
                  buttonCallback={() => console.log('Created')}
                  buttonName="Create"
                />

                <PreviewItem
                  buttonHeader="Channel name"
                  buttonDescription="Last Active:"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View"
                />

                <FootterButtonContainer>
                  <FooterButton>
                    View All
                  </FooterButton>
                </FootterButtonContainer>
                
              </HubBox>

              <HubBox>

                <PreviewItem
                  buttonHeader="Create Private Tournament"
                  buttonDescription="Get started with a private tournament and local players"
                  buttonDescriptionSecondary=""
                  buttonCallback={() => console.log('Created')}
                  buttonName="Create"
                />

                <PreviewItem
                  buttonHeader="Tournament name"
                  buttonDescription="Last Active:"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View"
                />

                <FootterButtonContainer>
                  <FooterButton>
                    View All
                  </FooterButton>
                </FootterButtonContainer>
                
              </HubBox>
      
            </HubLeftContainer>

            <HubRightContainer>

              <HubBox>

                <HubFriendSearch>
                  <SearchInput 
                    name="friendSearch"
                    placeholder="Search for a friend"
                  />
                  <SearchButton>
                    View All
                  </SearchButton>
                </HubFriendSearch>

                <PreviewItem
                  buttonHeader="Add friend"
                  buttonDescription="Add new friend to network of channels"
                  buttonDescriptionSecondary=""
                  buttonCallback={() => console.log('Created')}
                  buttonName="Add new"
                />

                <PreviewItem
                  buttonHeader="Eduardo"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                />

                <PreviewItem
                  buttonHeader="Andres"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                />
                
                <PreviewItem
                  buttonHeader="Thomas"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                />

                <PreviewItem
                  buttonHeader="Jerry"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                />

                <PreviewItem
                  buttonHeader="Mandy"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                />

                <PreviewItem
                  buttonHeader="Nick"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                />
                
              </HubBox>

            </HubRightContainer>
            
          </HubContainer>
        </Container>
      </HubWrapper>
    );
  }
}

export default Hub;