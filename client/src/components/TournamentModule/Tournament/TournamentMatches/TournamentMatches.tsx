import React from 'react';

/**
 * Components
 */
import TournamentMatch from '../../_Shared/TournamentMatch/TournamentMatch';

/**
 * Styles
 */
import {
  TournamentMatchesContainer,
  MatchesHeader,
  MatchesContentContainer,
  TournamentMatchContainer,
} from './TournamentMatchesStyles';

class TournamentMatches extends React.Component {
  render() {
    return (
      <TournamentMatchesContainer>

        <MatchesHeader>
          <h1>All Matches</h1>
        </MatchesHeader>

        {/* Matches Content */}
        <MatchesContentContainer>

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

        </MatchesContentContainer>
        {/* End of Matches Content */}
        
      </TournamentMatchesContainer>
    );
  }
}

export default TournamentMatches;