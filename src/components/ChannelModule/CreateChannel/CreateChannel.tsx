import React from 'react';

/**
 * Components
 */
import CreateChannelStepFour from './CreateChannelStepFour/CreateChannelStepFour';
import CreateChannelStepOne from './CreateChannelStepOne/CreateChannelStepOne';
import CreateChannelStepTwo from './CreateChannelStepTwo/CreateChannelStepTwo';
import CreateChannelStepThree from './CreateChannelStepThree/CreateChannelStepThree';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import { 
  CreateChannelContainer,
  Header,
  HeaderButton,
  CreateChannelHeader,
} from './CreateChannelStyles';

/**
 * Types
 */
import ColorTypes from '../../../models/ColorTypes';

interface CreateChannelProps { 
}

interface CreateChannelState {
  channelName: string;
  colorSelected: ColorTypes | null;
}

class CreateChannel extends React.Component<CreateChannelProps, CreateChannelState> {

  constructor(props: CreateChannelProps) {
    super(props);
    this.state = {
      channelName: '',
      colorSelected: null,
    };
  }
  
  handleChannelName = (channelName: string) => {
    this.setState({ channelName });
  }

  handleCancel = () => {
    
  }

  handleColorChange = (color: ColorTypes) => {
    this.setState({ colorSelected: color });
  }
  
  render() {
    return (
      <Wrapper>
        <Container>
          <CreateChannelContainer>
  
            {/* Container Header */}
            <CreateChannelHeader>
              <Header>Create Channel</Header>
              <HeaderButton onClick={this.handleCancel}>
                Cancel
              </HeaderButton>
            </CreateChannelHeader>

            {/* Step 1 [Choose icon color] */}
            <CreateChannelStepOne />

            {/* Step 2 [Name your channel] */}
            <CreateChannelStepTwo />
            
            {/* Step 3 [Invite friends] */}
            <CreateChannelStepThree />

            {/* Step 4 [Submit - create channel] */}
          <CreateChannelStepFour />
            
          </CreateChannelContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default CreateChannel;