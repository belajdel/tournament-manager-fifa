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
} from './PreviewTournamentLinkItemStyles';
import ColorTypes from '../../../../models/ColorTypes';

interface PreviewTournamentLinkItemProps {
  buttonHeader: string;
  buttonDescription: string;
  buttonDescriptionSecondary?: string;
  buttonColor: ColorTypes;
  to: string;
}

class PreviewTournamentLinkItem extends React.Component<PreviewTournamentLinkItemProps> {
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

export default PreviewTournamentLinkItem;