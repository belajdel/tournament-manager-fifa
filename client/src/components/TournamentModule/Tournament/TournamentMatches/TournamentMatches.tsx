import React from 'react';

/**
 * Styles
 */
import {
  TournamentMatchesContainer
} from './TournamentMatchesStyles';
import TournamentMatch from '../../_Shared/TournamentMatch/TournamentMatch';

class TournamentMatches extends React.Component {
  render() {
    return (
      <TournamentMatchesContainer>

        <TournamentMatchesHeader>
          <h1>All Matches</h1>
        </TournamentMatchesHeader>

        <TournamentMatchesContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
          <TournamentMatchContainer>
            <TournamentMatch />
          </TournamentMatchContainer>
        </TournamentMatchesContainer>
        
      </TournamentMatchesContainer>
    );
  }
}

export default TournamentMatches;