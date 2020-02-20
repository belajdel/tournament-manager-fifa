import React from 'react';

/**
 * Components
 */
import CreateStepHeader from '../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import {
  CreateChannelStep,
  StepContent
} from '../CreateChannelStyles';

import {
  SubmitButton,
  CancelButton
} from './CreateChannelStepFourStyles';

class CreateChannelStepFour extends React.Component {

  handleSubmit = () => {

  }

  handleCancel = () => {

  }
  
  render() {
    return(
      <CreateChannelStep>

        <CreateStepHeader 
          number={4}
          title="Done!"
        />
        
        <StepContent step="two">

          <SubmitButton onClick={this.handleSubmit}>
            Create Channel
          </SubmitButton>

          <CancelButton onClick={this.handleCancel}>
            Cancel
          </CancelButton>
          
        </StepContent>
      </CreateChannelStep>
    );
  }
}

export default CreateChannelStepFour;