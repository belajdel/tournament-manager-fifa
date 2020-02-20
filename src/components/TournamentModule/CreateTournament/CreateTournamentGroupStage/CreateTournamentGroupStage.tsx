import React from 'react';

/**
 * Components
 */
// import { Tables } from './Temp';
import TournamentTable from '../../_Shared/TournamentTable/TournamentTable';

/**
 * Icons
 */
import Shuffle from '../../../../assets/tournament-icons/icon-shuffle.png';

/**
 * Styles
 */
import {
  TournamentGroupStageContainer,
  GroupStageRow,
  TableContainer,
  ShuffleButton,
  ShuffleIcon,
  ShuffleTitle,
  FooterRow,
  ShuffleRow,
  FooterInputContainer,
  FooterInput,
} from './CreateTournamentGroupStageStyles';

class CreateTournamentGroupStage extends React.Component {

  handleShuffle = () => {
    
  }
  
  render() {
    return (
      <TournamentGroupStageContainer>

        {/* Row */}
        <GroupStageRow>
          <TableContainer>
            <TournamentTable />
          </TableContainer>
          <TableContainer>
            <TournamentTable />
          </TableContainer>
        </GroupStageRow>

        {/* Row */}
        <GroupStageRow>
          <TableContainer>
            <TournamentTable />
          </TableContainer>
        </GroupStageRow>

        <ShuffleRow>
          <ShuffleButton onClick={this.handleShuffle}>
            <ShuffleIcon
              alt="shuffleIcon"
              src={Shuffle}
            />
            <ShuffleTitle>
              Shuffle Teams
            </ShuffleTitle>
          </ShuffleButton>
        </ShuffleRow>

        <FooterRow>
          <FooterInputContainer>
            <FooterInput 
              placeholder="Number of matches vs. each group team"
              type="number"
              min={1}
            />
          </FooterInputContainer>
          <FooterInputContainer>
            <FooterInput 
              placeholder="Number of teams advancing from each group"
              type="number"
              min={1}
              max={3}
            />
          </FooterInputContainer>
        </FooterRow>
        
      </TournamentGroupStageContainer>
    );
  }
}

export default CreateTournamentGroupStage;