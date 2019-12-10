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
import PreviewLinkItem from '../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';

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

                <PreviewLinkItem
                  buttonHeader="Create Channel"
                  buttonDescription="Get started by creating a new channel community"
                  buttonColor={ColorTypes.primary}
                  to="/create/channel"
                />

                <PreviewLinkItem
                  buttonHeader="Channel name"
                  buttonDescription="Last Active:"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.secondary}
                  to={`/channel&c=${'asdca8asd'}`}
                />

                <FooterButtonContainer>
                  <FooterButton>
                    View All
                  </FooterButton>
                </FooterButtonContainer>
                
              </HubBox>

              <HubBox>

                <PreviewLinkItem
                  buttonHeader="Create Private Tournament"
                  buttonDescription="Get started with a private tournament and local players"
                  buttonColor={ColorTypes.warning}
                  to="/create/tournament"
                />

                <PreviewLinkItem
                  buttonHeader="Tournament name"
                  buttonDescription="Last Active:"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.danger}
                  to={`/tournament&t=${'sad8sad83'}`}
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

                <PreviewLinkItem
                  buttonHeader="Add friend"
                  buttonDescription="Add new friend to network of channels"
                  buttonColor={ColorTypes.danger}
                  to="/add"
                />

                <PreviewLinkItem
                  buttonHeader="Eduardo"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.primary}
                  to={`/user&u=${'sased34f'}`}
                />

                <PreviewLinkItem
                  buttonHeader="Andres"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.warning}
                  to={`/user&u=${'sased34f'}`}
                />
                
                <PreviewLinkItem
                  buttonHeader="Thomas"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.success}
                  to={`/user&u=${'sased34f'}`}
                />

                <PreviewLinkItem
                  buttonHeader="Jerry"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.secondary}
                  to={`/user&u=${'sased34f'}`}
                />

                <PreviewLinkItem
                  buttonHeader="Mandy"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.link}
                  to={`/user&u=${'sased34f'}`}
                />

                <PreviewLinkItem
                  buttonHeader="Nick"
                  buttonDescription="Last active"
                  buttonDescriptionSecondary="Yesterday - 4:04 pm"
                  buttonColor={ColorTypes.success}
                  to={`/user&u=${'sased34f'}`}
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