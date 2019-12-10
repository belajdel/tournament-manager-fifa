import React from 'react';

/**
 * Styles
 */
import {
  PreviewLink,
  PreviewIcon,
  PreviewContentContainer,
  PreviewContentDescription,
  DescriptionSecondary
} from './PreviewLinkItemStyles';
import ColorTypes from '../../../../models/ColorTypes';

interface PreviewLinkItemProps {
  buttonHeader: string;
  buttonDescription: string;
  buttonDescriptionSecondary?: string;
  buttonColor: ColorTypes;
  to: string;
}

class PreviewLinkItem extends React.Component<PreviewLinkItemProps> {
  render() {
    return (
      <PreviewLink to={this.props.to}>

        <PreviewIcon 
          buttonColor={this.props.buttonColor || null}
        />
        
        <PreviewContentContainer>
          <h1>{this.props.buttonHeader}</h1>  
          
          <PreviewContentDescription>
            { this.props.buttonDescription } { this.props.buttonDescriptionSecondary && (
              <DescriptionSecondary>{this.props.buttonDescriptionSecondary}</DescriptionSecondary>
            )}
          </PreviewContentDescription>
            
        </PreviewContentContainer>
        
      </PreviewLink>      
    );
  }
}

export default PreviewLinkItem;