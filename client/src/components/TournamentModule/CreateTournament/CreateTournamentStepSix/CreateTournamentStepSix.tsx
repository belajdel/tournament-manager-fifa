import React from 'react';

/**
 * Components
 */
import CreateStepHeader from '../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import {
  StepSixContainer
} from './CreateTournamentStepSixStyles';
import {
  StepContent
} from '../CreateTournamentStyles';

class CreateTournamentStepSix extends React.Component {
  render() {
    return (
      <StepSixContainer>

        <CreateStepHeader
          number={6}
          title="Done!"
        />

        <StepContent>

          
        </StepContent>

      </StepSixContainer>
    );
  }
}

export default CreateTournamentStepSix;