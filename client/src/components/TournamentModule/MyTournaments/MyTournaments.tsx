import React from 'react';

/**
 * Components
 */
import PreviewTournamentLinkItem from '../../_Shared/Buttons/PreviewTournamentLinkItem/PreviewTournamentLinkItem';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  TournamentsList,
  TournamentsHeader,
  MyTournamentsContainer
} from './MyTournamentsStyles';


/**
 * Types
 */
import ColorTypes from '../../../models/ColorTypes';

class MyTournaments extends React.Component {
  render() {

    const ChannelList = [1, 2, 3, 4, 5, 6, 7].map(a => (
      <PreviewTournamentLinkItem
        key={a}
        buttonHeader="Tournament name"
        buttonDescription="Last Active:"
        buttonDescriptionSecondary="Yesterday - 4:04 pm"
        buttonColor={ColorTypes.warning}
        to={`/tournament&t=${'dsa43jfdsf'}`}
      />
    ))
    
    return (
      <Wrapper>
        <Container>
          <MyTournamentsContainer>

            <TournamentsHeader>
              <PreviewTournamentLinkItem
                  buttonHeader="Create Tournament"
                  buttonDescription="Get started by creating a new tournament"
                  buttonColor={ColorTypes.secondary}
                  to="/create/tournament"
                />
            </TournamentsHeader>

            <TournamentsQueryContainer>

              <QueryLeftContainer>

              <InputContainer>
                <SelectLeague>
                  <LeagueOption value="premierLeague">
                    England Premier League
                  </LeagueOption>
                  <LeagueOption value="laLiga">
                    Spain La Liga
                  </LeagueOption>
                  <LeagueOption value="serieA">
                    Italy Serie A
                  </LeagueOption>
                  <LeagueOption value="bundesliga">
                    Germany 1. Bundesliga
                  </LeagueOption>
                  <LeagueOption value="ligueOne">
                    France Ligue 1
                  </LeagueOption>
                  <LeagueOption value="ligaNOS">
                    Portugal Liga NOS
                  </LeagueOption>
                  <LeagueOption value="eredivisie">
                    Holland Eredivisie
                  </LeagueOption>
                  <LeagueOption value="MLS">
                    USA MLS
                  </LeagueOption>
                  <LeagueOption value="ligaMX">
                    Mexico Liga MX
                  </LeagueOption>
                </SelectLeague>
              </InputContainer>
                  
              </QueryLeftContainer>

              <QueryRightContainer>
                <QuerySearchInput
                  placeholder="Search for a tournament"
                  type="text"
                />
              </QueryRightContainer>

            </TournamentsQueryContainer>

            <TournamentsList>

              { ChannelList }
              
            </TournamentsList>
            
          </MyTournamentsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyTournaments;