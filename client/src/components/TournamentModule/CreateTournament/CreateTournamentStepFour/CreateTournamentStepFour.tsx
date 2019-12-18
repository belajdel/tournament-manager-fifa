import React from 'react';

/**
 * Components
 */
import CreateStepHeader from '../../../_Shared/CreateStepHeader/CreateStepHeader';
import CreateTournamentKnockoutStage from './CreateTournamentKnockoutStage/CreateTournamentKnockoutStage';
import CreateTournamentGroupStage from './CreateTournamentGroupStage/CreateTournamentGroupStage';

/**
 * Icons
 */
import TournamentIcon from '../../../../assets/icons/icon-hub.png';

/**
 * Styles
 */
import { StepContent } from '../CreateTournamentStyles';
import {
  StepFourContainer,
  TournamentButtonList,
  TournamentButtonItem,
  ButtonIcon,
  TournamentTitle,
} from './CreateTournamentStepFourStyles';

class CreateTournamentStepFour extends React.Component {
  render() {
    return (
      <StepFourContainer>

        <CreateStepHeader
          number={4}
          title="Tournament type"
        />

        <StepContent>
          <TournamentButtonList>
            
            <TournamentButtonItem>
              <ButtonIcon 
                alt="tournamentIcon"
                src={TournamentIcon}
              />
              <TournamentTitle>
                Group Only
              </TournamentTitle>
            </TournamentButtonItem>

            <TournamentButtonItem>
              <ButtonIcon 
                alt="tournamentIcon"
                src={TournamentIcon}
              />
              <TournamentTitle>
                Both
              </TournamentTitle>
            </TournamentButtonItem>

            <TournamentButtonItem>
              <ButtonIcon 
                alt="tournamentIcon"
                src={TournamentIcon}
              />
              <TournamentTitle>
                Knockout Only
              </TournamentTitle>
            </TournamentButtonItem>

          </TournamentButtonList>
        </StepContent>

      </StepFourContainer>
    );
  }
}

export default CreateTournamentStepFour;