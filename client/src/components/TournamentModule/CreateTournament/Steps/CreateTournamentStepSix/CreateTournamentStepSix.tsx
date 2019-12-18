import React from 'react';

/**
 * Components
 */
import CreateStepHeader from '../../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import { StepContent } from '../../CreateTournamentStyles';
import {
  CreateTournamentFooter,
  CreateButton,
  CancelButton,
  StepSixContainer,
} from './CreateTournamentStepSixStyles';

class CreateTournamentStepSix extends React.Component {

  handleCreate = () => {

  }

  handleCancel = () => {

  }
  
  render() {
    return (
      <StepSixContainer>

        <CreateStepHeader
          number={6}
          title="Done!"
        />

        <StepContent>

          <CreateTournamentFooter>
            <CreateButton onClick={this.handleCreate}>
              Create Tournament
            </CreateButton>

            <CancelButton onClick={this.handleCancel}>
              Cancel
            </CancelButton>
          </CreateTournamentFooter>
                    
        </StepContent>

      </StepSixContainer>
    );
  }
}

export default CreateTournamentStepSix;