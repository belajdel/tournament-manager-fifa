import React from 'react';

/**
 * Styles
 */
import {
  TournamentKnockoutStageContainer,
  KnockoutStageContainer,
  KnockoutStageHeader,
  KnockoutStageContent,
  SettingItem,
  ItemOptions,
  ItemBox,
  BoxIcon
} from './CreateTournamentKnockoutStageStyles';

class CreateTournamentKnockoutStage extends React.Component {
  render() {
    return (
      <TournamentKnockoutStageContainer>

        <KnockoutStageHeader>
          <h1>Knockout Settings</h1>
          <p>
            Choose single or double leg for the knockout stages
          </p>
        </KnockoutStageHeader>

        <KnockoutStageContent>
          
          <SettingItem>
            <h1>All Rounds</h1>
            <ItemOptions>
              <ItemBox>
                <BoxIcon />
                <p>Single Leg</p>
              </ItemBox>
              <ItemBox>
                <BoxIcon />
                <p>Double Leg</p>
              </ItemBox>
            </ItemOptions>
          </SettingItem>

          <SettingItem>
            <h1>Away Goals Rule</h1>
            <ItemOptions>
              <ItemBox>
                <BoxIcon />
                <p>Yes</p>
              </ItemBox>
              <ItemBox>
                <BoxIcon />
                <p>No</p>
              </ItemBox>
            </ItemOptions>
          </SettingItem>

          <SettingItem>
            <h1>Final</h1>
            <ItemOptions>
              <ItemBox>
                <BoxIcon />
                <p>Single Leg</p>
              </ItemBox>
              <ItemBox>
                <BoxIcon />
                <p>Double Leg</p>
              </ItemBox>
            </ItemOptions>
          </SettingItem>

        </KnockoutStageContent>
        
      </TournamentKnockoutStageContainer>
    );
  }
}

export default CreateTournamentKnockoutStage;