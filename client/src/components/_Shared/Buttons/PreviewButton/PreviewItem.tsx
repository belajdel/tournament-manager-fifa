import React from 'react';

/**
 * Styles
 */
import {
  PreviewButton,
  PreviewIcon,
  PreviewContentContainer,
  PreviewContentDescription,
  DescriptionSecondary
} from './PreviewItemStyles';
import ColorTypes from '../../../../models/ColorTypes';

interface PreviewItemProps {
  buttonHeader: string;
  buttonDescription: string;
  buttonDescriptionSecondary: string;
  buttonCallback: any;
  buttonName: string;
  buttonColor: ColorTypes;
}

class PreviewItem extends React.Component<PreviewItemProps> {
  render() {
    return (
      <PreviewButton>

        <PreviewIcon 
          buttonColor={this.props.buttonColor || null}
        />
        
        <PreviewContentContainer>
          <h1>{this.props.buttonHeader}</h1>  
          
          <PreviewContentDescription>
            { this.props.buttonDescription } <DescriptionSecondary>{this.props.buttonDescriptionSecondary}</DescriptionSecondary>
          </PreviewContentDescription>
            
        </PreviewContentContainer>
        
      </PreviewButton>      
    );
  }
}

export default PreviewItem;