import React from 'react';

/**
 * Styles
 */
import {
  PreviewLink,
  PreviewIcon,
  PreviewContentContainer,
  PreviewContentDescription,
  DescriptionSecondary,
  HeaderRow,
  FooterRow,
  MembersHeader,
  MembersList,
  MemberItem,
} from './PreviewTournamentLinkItemStyles';

/**
 * Types
 */
import ColorTypes from '../../../../models/ColorTypes';

interface PreviewTournamentLinkItemProps {
  buttonHeader: string;
  buttonDescription: string;
  buttonDescriptionSecondary?: string;
  buttonColor: ColorTypes;
  to: string;
}

const PlayersExample = [
  "Eduardo",
  "Andres",
  "Erik",
  "Ben",
  "Steve"
];

class PreviewTournamentLinkItem extends React.Component<PreviewTournamentLinkItemProps> {
  render() {
    return (
      <PreviewLink to={this.props.to}>

        {/* [Preview Row] */}
        <HeaderRow>
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

            <PreviewContentDescription>
              { this.props.buttonDescription } { this.props.buttonDescriptionSecondary && (
                <DescriptionSecondary>{this.props.buttonDescriptionSecondary}</DescriptionSecondary>
              )}
            </PreviewContentDescription>

          </PreviewContentContainer>
        </HeaderRow>
        
        {/* [Preview Row] */}
        <FooterRow>

          <MembersHeader>Members</MembersHeader>

          <MembersList>
            {
              PlayersExample.map(player => (
                <MemberItem 
                  key={player} 
                  to={`/${player}`}
                >
                  {player}
                </MemberItem>
              ))
            }
            
          </MembersList>

        </FooterRow>

        
      </PreviewLink>      
    );
  }
}

export default PreviewTournamentLinkItem;