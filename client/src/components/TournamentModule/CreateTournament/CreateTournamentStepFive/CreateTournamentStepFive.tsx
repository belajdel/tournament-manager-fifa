import React from 'react';

/**
 * Components
 */
import CreateStepHeader from '../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import {
  StepFiveContainer
} from './CreateTournamentStepFiveStyles';
import {
  StepContent,
} from '../CreateTournamentStyles';

class CreateTournamentStepFive extends React.Component {
  render() {
    return (
      <StepFiveContainer>

        <CreateStepHeader
          number={5}
          title="Group &amp; Settings"
        />

        <StepContent>

          
        </StepContent>

      </StepFiveContainer>
    );
  }
}

export default CreateTournamentStepFive;