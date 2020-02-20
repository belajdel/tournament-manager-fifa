import React from 'react';

/**
 * Components
 */
import PreviewLinkItem from '../../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';
import PreviewTournamentLinkItem from '../../../_Shared/Buttons/PreviewTournamentLinkItem/PreviewTournamentLinkItem';

/**
 * Styles
 */
import {
  ChannelHomeContainer,
  HomeHeader,
  HomeContent,
  ContentLeftContainer,
  ContentRightContainer,
  HeaderTitleContainer,
  TitleIconContainer,
  TitleIcon,
  HeaderTitle,
  HeaderDescription,
  StatItem,
  ItemNumber,
  ContentHeader,
  TournamentsListContainer,
} from './ChannelHomeStyles';

/**
 * Types
 */
import ColorTypes from '../../../../models/ColorTypes';

class ChannelHome extends React.Component {
  render() {
    return (
      <ChannelHomeContainer>

        {/* [Main Header] */}
        <HomeHeader>

          <HeaderTitleContainer>
            <TitleIconContainer>
              <TitleIcon />
            </TitleIconContainer>

            <HeaderTitle>Channel Name</HeaderTitle>
          </HeaderTitleContainer>
          
          <HeaderDescription>

            <StatItem>
              <ItemNumber>14</ItemNumber> tournaments
            </StatItem>

            <StatItem>
              <ItemNumber>6</ItemNumber> members
            </StatItem>

            <StatItem>
              <ItemNumber>9</ItemNumber> players
            </StatItem>
            
          </HeaderDescription>

        </HomeHeader>

        {/* [Main Content] */}
        <HomeContent>

          {/* Content Left */}
          <ContentLeftContainer>

            <ContentHeader>
              Latest Tournaments
            </ContentHeader>

            <TournamentsListContainer>
              {
                [1, 2, 3, 4, 5, 6, 7].map(a => (
                  <PreviewTournamentLinkItem
                    key={a}
                    buttonHeader="Tournament name"
                    buttonDescription="Last Active:"
                    buttonDescriptionSecondary="Yesterday - 4:04 pm"
                    buttonColor={ColorTypes.info}
                    to={`/tournament&t=${'dsa43jfdsf'}`}
                  />
                ))
              }
            </TournamentsListContainer>

          </ContentLeftContainer>

          {/* Content Right */}
          <ContentRightContainer>

            <PreviewLinkItem
              buttonHeader="Create Tournament"
              buttonDescription="Get started with a private tournament and local players"
              buttonColor={ColorTypes.success}
              to="/create/tournament"
            />

            <PreviewLinkItem
              buttonHeader="Invite to Channel"
              buttonDescription="Get started with a private tournament and local players"
              buttonColor={ColorTypes.success}
              to="/create/tournament"
            />

            <PreviewLinkItem
              buttonHeader="Add Local Players"
              buttonDescription="Get started with a private tournament and local players"
              buttonColor={ColorTypes.success}
              to="/create/tournament"
            />

            <PreviewLinkItem
              buttonHeader="Channel Settings"
              buttonDescription="Get started with a private tournament and local players"
              buttonColor={ColorTypes.primary}
              to="/create/tournament"
            />
            
          </ContentRightContainer>
          
        </HomeContent>
        
      </ChannelHomeContainer>
    );
  }
}

export default ChannelHome;