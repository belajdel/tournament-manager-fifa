import React from 'react';

/**
 * Components
 */
import ButtonColorList from '../../../../_Shared/Buttons/ButtonColorList/ButtonColorList';
import CreateStepHeader from '../../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import {
  StepOneContainer
} from './CreateTournamentStepOneStyles';
import {
  StepContent
} from '../../CreateTournamentStyles';

class CreateTournamentStepOne extends React.Component {
  render() {
    return (
      <StepOneContainer>

        <CreateStepHeader 
          number={1}
          title="Choose icon color"
        />

        <StepContent>

          <ButtonColorList />
          
        </StepContent>

      </StepOneContainer>
    );
  }
}

export default CreateTournamentStepOne;