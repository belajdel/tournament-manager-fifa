import React from 'react';

/**
 * Component
 */
import CreateStepHeader from '../../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import {
  StepTwoContainer,
  TournamentNameInput
} from './CreateTournamentStepTwoStyles';
import {
  StepContent
} from '../../CreateTournamentStyles';

class CreateTournamentStepTwo extends React.Component {
  
  render() {
    return (
      <StepTwoContainer>

        <CreateStepHeader
          number={2}
          title="Name your tournament"
        />

        <StepContent>

          <TournamentNameInput 
            id="tournamentName"
            placeholder="Tournament name"
            type="text"
          />
          
        </StepContent>

      </StepTwoContainer>
    );
  }
}

export default CreateTournamentStepTwo;