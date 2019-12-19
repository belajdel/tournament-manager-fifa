import React from 'react';

/**
 * Components
 */
import TournamentMatch from '../../_Shared/TournamentMatch/TournamentMatch';
import TournamentTable from '../../_Shared/TournamentTable/TournamentTable';

/**
 * Styles
 */
import {
  TournamentGroupStageContainer,
  GroupStageHeader,
  GroupStageContent,
  ContentLeft,
  ContentRight,
  TableContainer,
  MatchContainer,
} from './TournamentGroupStageStyles';

class TournamentGroupStage extends React.Component {
  render() {
    return (
      <TournamentGroupStageContainer>

        <GroupStageHeader>
          <h1>Group Stage</h1>
        </GroupStageHeader>

        <GroupStageContent>
          <ContentLeft>

            <TableContainer>
              <h1>Group A</h1>
              <TournamentTable />
            </TableContainer>

            <TableContainer>
              <h1>Group B</h1>
              <TournamentTable />
            </TableContainer>

            <TableContainer>
              <h1>Group C</h1>
              <TournamentTable />
            </TableContainer>

            <TableContainer>
              <h1>Group D</h1>
              <TournamentTable />
            </TableContainer>

          </ContentLeft>
          <ContentRight>

            <MatchContainer>
              <h1>Next Match</h1>
              <TournamentMatch />
            </MatchContainer>

            <MatchContainer>
                <h1>Previous Match</h1>
              <TournamentMatch />
            </MatchContainer>
            
          </ContentRight>
        </GroupStageContent>
        
      </TournamentGroupStageContainer>
    );
  }
}

export default TournamentGroupStage;