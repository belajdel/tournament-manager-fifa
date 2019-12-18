import React from 'react';

/**
 * Styles
 */
import {
  TournamentMatchContainer,
  MatchHeader,
  MatchContent,
  MatchHomePlayer,
  MatchVisitingPlayer,
  PlayerIcon,
  MatchScore,
  ScoreHeader,
  HomeScoreInput,
  VisitingScoreInput,
  ScoreFooter,
  ScoreButton,
} from './TournamentMatchStyles';

class TournamentMatch extends React.Component {
  render() {
    return (
      <TournamentMatchContainer>

        <MatchHeader>
          Match 12
        </MatchHeader>

        <MatchContent>

          <MatchHomePlayer>
            <PlayerIcon />
            <h1>Player 2</h1>
            <p>1 - 2</p>
          </MatchHomePlayer>

          <MatchScore>
            <ScoreHeader>
              <HomeScoreInput 
                placeholder="#"
                type="number"
              />
              <p>vs.</p>
              <VisitingScoreInput 
                placeholder="#"
                type="number"
              />
            </ScoreHeader>
            <ScoreFooter>
              <ScoreButton>
                Submit
              </ScoreButton>
            </ScoreFooter>
          </MatchScore>

          <MatchVisitingPlayer>
            <PlayerIcon />
            <h1>Player 2</h1>
            <p>1 - 2</p>
          </MatchVisitingPlayer>
          
        </MatchContent>
        
      </TournamentMatchContainer>
    );
  }
}

export default TournamentMatch;