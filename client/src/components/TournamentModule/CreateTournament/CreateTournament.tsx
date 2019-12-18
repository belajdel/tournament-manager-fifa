import React from 'react';

/**
 * Components
 */
import CreateTournamentStepOne from './Steps/CreateTournamentStepOne/CreateTournamentStepOne';
import CreateTournamentStepTwo from './Steps/CreateTournamentStepTwo/CreateTournamentStepTwo';
import CreateTournamentStepThree from './Steps/CreateTournamentStepThree/CreateTournamentStepThree';
import CreateTournamentStepFour from './Steps/CreateTournamentStepFour/CreateTournamentStepFour';
import CreateTournamentStepFive from './Steps/CreateTournamentStepFive/CreateTournamentStepFive';
import CreateTournamentStepSix from './Steps/CreateTournamentStepSix/CreateTournamentStepSix';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  CreateTournamentContainer,
  CreateTournamentHeader,
  HeaderCancelButton,
} from './CreateTournamentStyles';

interface CreateTournamentProps {
  
}

interface CreateTournamentState {
  
}

class CreateTournament extends React.Component<CreateTournamentProps, CreateTournamentState> {

  constructor(props: CreateTournamentProps) {
    super(props);
    this.state = {
      
    };
  }

  handleCancel = () => {
    
  }
  
  render() {
    return (
      <Wrapper>
        <Container>
          <CreateTournamentContainer>
      
            <CreateTournamentHeader>
              <h1>Create Tournament</h1>
              <HeaderCancelButton onClick={this.handleCancel}>Cancel</HeaderCancelButton>
            </CreateTournamentHeader>
      
            {/* Step One */}
            <CreateTournamentStepOne />
            
            {/* Step Two */}
            <CreateTournamentStepTwo />
            
            {/* Step Three */}
            <CreateTournamentStepThree />
            
            {/* Step Four */}
            <CreateTournamentStepFour />
            
            {/* Step Five */}
            <CreateTournamentStepFive />
            
            {/* Step Six */}
            <CreateTournamentStepSix />

          </CreateTournamentContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default CreateTournament;