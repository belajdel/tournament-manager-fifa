import React from 'react';

/**
 * Styles
 */
import {
  TournamentGroupStageContainer,
} from './TournamentGroupStageStyles';
import TournamentTable from '../../_Shared/TournamentTable/TournamentTable';

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

            
            
          </ContentRight>
        </GroupStageContent>
        
      </TournamentGroupStageContainer>
    );
  }
}

export default TournamentGroupStage;