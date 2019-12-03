import React from 'react';

/**
 * Styles
 */
import {
  PreviewButtonContainer,
  PreviewLeftContainer,
  PreviewRightContainer,
  PreviewIcon,
  PreviewContentContainer,
  PreviewContentDescription,
  DescriptionSecondary,
  PreviewButton,
} from './PreviewItemStyles';

interface PreviewItemProps {
  buttonHeader: string;
  buttonDescription: string;
  buttonDescriptionSecondary: string;
  buttonCallback: any;
  buttonName: string;
}

class PreviewItem extends React.Component<PreviewItemProps> {
  render() {
    return (
      <PreviewButtonContainer>

        <PreviewLeftContainer>
          <PreviewIcon></PreviewIcon>
          
          <PreviewContentContainer>
            <h1>{this.props.buttonHeader}</h1>  
            
            <PreviewContentDescription>
              { this.props.buttonDescription } <DescriptionSecondary>{this.props.buttonDescriptionSecondary}</DescriptionSecondary>
            </PreviewContentDescription>
            
          </PreviewContentContainer>
        </PreviewLeftContainer>

        <PreviewRightContainer>
          <PreviewButton onClick={this.props.buttonCallback}>
            { this.props.buttonName }
          </PreviewButton>
        </PreviewRightContainer>
        
      </PreviewButtonContainer>      
    );
  }
}

export default PreviewItem;