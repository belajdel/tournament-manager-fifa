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
  ChannelNameInput
} from './CreateChannelStepTwoStyles';

class CreateChannelStepTwo extends React.Component {
  render() {
    return(
      <CreateChannelStep>

        <CreateStepHeader
          number={2}
          title="Name your channel"
        />
        
        <StepContent>

          <ChannelNameInput 
            placeholder="Channel name"
            type="text"
          />
          
        </StepContent>
      </CreateChannelStep>
    );
  }
}

export default CreateChannelStepTwo;