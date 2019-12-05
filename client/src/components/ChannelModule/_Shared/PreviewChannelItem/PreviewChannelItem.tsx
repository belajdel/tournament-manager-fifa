import React from 'react';

/**
 * Styles
 */
import {
  PreviewChannelItemContainer,
  ChannelItemMain,
  MainLeftContainer,
  MainIcon,
  MainContentContainer,
  ContentDescription,
  MainRightContainer,
  MainButton,
  ChannelItemFooter,
  FooterHeader,
  FooterMembersList,
  FooterMember,
} from './PreviewChannelItemStyles';

class PreviewChannelItem extends React.Component {
  render() {
    return (
      <PreviewChannelItemContainer>

        <ChannelItemMain>

          <MainLeftContainer>
            <MainIcon></MainIcon>
            <MainContentContainer>

              <h1>Channel name</h1>
              
              <ContentDescription>
                <p>
                  Last active: <span>Yesterday - 4:04 pm</span>
                </p>
                <p>
                  Created: <span>September 24, 2019</span>
                </p>
              </ContentDescription>
              
            </MainContentContainer>
            
          </MainLeftContainer>

          <MainRightContainer>
            <MainButton>
              Go to
            </MainButton>
          </MainRightContainer>
          
        </ChannelItemMain>

        <ChannelItemFooter>
          <FooterHeader>
            Members
          </FooterHeader>
          <FooterMembersList>
            <FooterMember>Account name</FooterMember>
            <FooterMember>Account name</FooterMember>
            <FooterMember>Account name</FooterMember>
            <FooterMember>Account name</FooterMember>
            <FooterMember>Account name</FooterMember>
          </FooterMembersList>
        </ChannelItemFooter>
        
      </PreviewChannelItemContainer>
    );
  }
}

export default PreviewChannelItem;