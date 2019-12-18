import React from 'react';

/**
 * Styles
 */
import {
  TournamentResultsContainer
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
              <HeaderIcon />
            </HeaderLeft>
            <HeaderRight>
              <TournamentTitle>
                Tournament Name <TournamentStatus><StatusIcon /></TournamentStatus>
              </TournamentTitle>
              <TournamentType>
                Type: <TournamentTypeDesc>Group</TournamentTypeDesc>
              </TournamentType>
              <TournamentDetails>
                <TournamentStat>
                  <TournamentStatNumber>6</TournamentStatNumber> members
                </TournamentStat>
                <TournamentStat>
                  <TournamentStatNumber>9<TournamentStatNumber> players
                </TournamentStat>
                <TournamentStat>
                  <TournamentStatNumber>61</TournamentStatNumber> matches played
                </TournamentStat>
                <TournamentStat>
                  <TournamentStatNumber>67</TournamentStatNumber> goals scored
                </TournamentStat>
              </TournamentDetails>
            </HeaderRight>
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