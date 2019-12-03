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
                
              </HubBox>

            </HubRightContainer>
            
          </HubContainer>
        </Container>
      </HubWrapper>
    );
  }
}

export default Hub;