import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  FooterButtonContainer,
  FooterButton,
  HubBox,
  HubContainer,
  HubLeftContainer,
  HubRightContainer,
  HubFriendSearch,
  SearchInput,
  SearchButton,
  SearchIcon
} from './HubStyles';
import PreviewItem from '../../_Shared/Buttons/PreviewButton/PreviewItem';

/**
 * Icons
 */
import Icon from '../../../assets/icons/icon-right-arrow.png';
import ColorTypes from '../../../models/ColorTypes';

class Hub extends React.Component {
  render() {
    return (
      <Wrapper>
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
                  buttonColor={ColorTypes.primary}
                />

                <PreviewItem
                  buttonHeader="Channel name"
                  buttonDescription="Last Active:"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View"
                  buttonColor={ColorTypes.secondary}
                />

                <FooterButtonContainer>
                  <FooterButton>
                    View All
                  </FooterButton>
                </FooterButtonContainer>
                
              </HubBox>

              <HubBox>

                <PreviewItem
                  buttonHeader="Create Private Tournament"
                  buttonDescription="Get started with a private tournament and local players"
                  buttonDescriptionSecondary=""
                  buttonCallback={() => console.log('Created')}
                  buttonName="Create"
                  buttonColor={ColorTypes.warning}
                />

                <PreviewItem
                  buttonHeader="Tournament name"
                  buttonDescription="Last Active:"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View"
                  buttonColor={ColorTypes.danger}
                />

                <FooterButtonContainer>
                  <FooterButton>
                    View All
                  </FooterButton>
                </FooterButtonContainer>
                
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
                    <SearchIcon 
                      src={Icon}
                      alt="searchIcon"
                    />
                  </SearchButton>
                </HubFriendSearch>

                <PreviewItem
                  buttonHeader="Add friend"
                  buttonDescription="Add new friend to network of channels"
                  buttonDescriptionSecondary=""
                  buttonCallback={() => console.log('Created')}
                  buttonName="Add new"
                  buttonColor={ColorTypes.danger}
                  />

                <PreviewItem
                  buttonHeader="Eduardo"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                  buttonColor={ColorTypes.primary}
                />

                <PreviewItem
                  buttonHeader="Andres"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                  buttonColor={ColorTypes.warning}
                />
                
                <PreviewItem
                  buttonHeader="Thomas"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                  buttonColor={ColorTypes.success}
                />

                <PreviewItem
                  buttonHeader="Jerry"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                  buttonColor={ColorTypes.secondary}
                />

                <PreviewItem
                  buttonHeader="Mandy"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                  buttonColor={ColorTypes.link}
                />

                <PreviewItem
                  buttonHeader="Nick"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonCallback={() => console.log('Created')}
                  buttonName="View profile"
                  buttonColor={ColorTypes.success}
                />

                <FooterButtonContainer>
                  <FooterButton>
                    View All
                  </FooterButton>
                </FooterButtonContainer>
                
              </HubBox>

            </HubRightContainer>
            
          </HubContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Hub;