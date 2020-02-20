import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  TournamentContainer,
} from './TournamentStyles';
import TournamentGroupStage from './TournamentGroupStage/TournamentGroupStage';
import TournamentHeader from './TournamentHeader/TournamentHeader';
import TournamentKnockoutStage from './TournamentKnockoutStage/TournamentKnockoutStage';
import TournamentMatches from './TournamentMatches/TournamentMatches';
import TournamentParticipants from './TournamentParticipants/TournamentParticipants';
import TournamentResults from './TournamentResults/TournamentResults';

class Tournament extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <TournamentContainer>

            {/* Tournament Header */}
            <TournamentHeader />

            {/* Tournament GroupStage */}
            <TournamentGroupStage />

            {/* Tournament KnockoutStage */}
            <TournamentKnockoutStage />

            {/* Tournament Matches */}
            <TournamentMatches />

            {/* Tournament Participants */}
            <TournamentParticipants />

            {/* Tournament Results */}
            <TournamentResults />
            
          </TournamentContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Tournament;