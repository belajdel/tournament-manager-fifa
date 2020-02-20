import React from 'react';

/**
 * Icons
 */
import TrophyIcon from '../../../../assets/tournament-icons/icon-trophy.png';

/**
 * Styles
 */
import {
  TournamentResultsContainer,
  TournamentResultsHeader,
  TournamentResultsContent,
  HeaderRow,
  HeaderLeft,
  HeaderRight,
  HeaderIconContainer,
  HeaderIcon,
  TournamentTitle,
  TournamentStatus,
  StatusIcon,
  TournamentType,
  TournamentTypeDesc,
  TournamentDetails,
  TournamentStat,
  StatNumber,
  PlacingRow,
  PlaceItem,
  ItemIcon,
  FooterRow,
  FooterButton,
} from './TournamentResultsStyles';

class TournamentResults extends React.Component {
  render() {
    return (
      <TournamentResultsContainer>

        <TournamentResultsHeader>
          <h1>Results</h1>
        </TournamentResultsHeader>

        <TournamentResultsContent>

          <HeaderRow>

            <HeaderLeft>
              <HeaderIconContainer>
                <HeaderIcon 
                  src={TrophyIcon}
                />
              </HeaderIconContainer>
            </HeaderLeft>

            {/* [Header Right] */}
            <HeaderRight>
              <TournamentTitle>
                Tournament Name <TournamentStatus><StatusIcon /></TournamentStatus>
              </TournamentTitle>

              <TournamentType>
                Type: <TournamentTypeDesc>Group</TournamentTypeDesc>
              </TournamentType>

              {/* Tournament Details [Stats] */}
              <TournamentDetails>

                <TournamentStat>
                  <StatNumber>6</StatNumber> members
                </TournamentStat>

                <TournamentStat>
                  <StatNumber>9</StatNumber> players
                </TournamentStat>
                
                <TournamentStat>
                  <StatNumber>61</StatNumber> matches played
                </TournamentStat>

                <TournamentStat>
                  <StatNumber>67</StatNumber> goals scored
                </TournamentStat>
                
              </TournamentDetails>
              {/* End of Tournament Details [Stats] */}

            </HeaderRight>
            {/* [End of Header Right] */}
            
          </HeaderRow>
          
          <PlacingRow>

            <PlaceItem>
              <ItemIcon />
              <h1>1st Place</h1>
            </PlaceItem>

            <PlaceItem>
              <ItemIcon />
              <h1>2nd Place</h1>
            </PlaceItem>

            <PlaceItem>
              <ItemIcon />
              <h1>3rd Place</h1>
            </PlaceItem>
            
          </PlacingRow>

          <FooterRow>
            <FooterButton>
              Complete Tournament
            </FooterButton>
          </FooterRow>
          
        </TournamentResultsContent>
        
      </TournamentResultsContainer>
    );
  }
}

export default TournamentResults;