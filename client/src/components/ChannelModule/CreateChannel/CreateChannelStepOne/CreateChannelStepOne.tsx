import React from 'react';

/**
 * Components
 */
import ButtonColorList from '../../../_Shared/Buttons/ButtonColorList/ButtonColorList';
import CreateStepHeader from '../../../_Shared/CreateStepHeader/CreateStepHeader';

/**
 * Styles
 */
import {
  CreateChannelStep,
  StepContent
} from '../CreateChannelStyles';
import {} from './CreateChannelStepOneStyles';

/**
 * Types
 */
import ColorTypes from '../../../../models/ColorTypes';

/**
 * Component Interfaces
 */
interface CreateChannelStepOneProps {

}

interface CreateChannelStepOneState {
  buttonColor: ColorTypes | null;
}

class CreateChannelStepOne extends React.Component<
  CreateChannelStepOneProps, 
  CreateChannelStepOneState
> {

  constructor(props: CreateChannelStepOneProps) {
    super(props);
    this.state = {
      buttonColor: null
    };
  }

  handleColorChange = (buttonColor: ColorTypes) => {
    this.setState({ buttonColor });
  }
  
  render() {
    return(
      <CreateChannelStep>

        <CreateStepHeader 
          number={1}
          title="Choose icon color"
        />

        <StepContent>
          
          {/* [Color List] Choose icon */}
          <ButtonColorList />
          
        </StepContent>
      </CreateChannelStep>
    );
  }
}

export default CreateChannelStepOne;