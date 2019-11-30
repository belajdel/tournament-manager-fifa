import React from 'react';
import { Container } from '../../../styles/Global';
import {
  BoxHeader,
  SettingsWrapper,
  SettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsBox
} from './SettingsStyles';

class Settings extends React.Component {
  render() {
    return (
      <SettingsWrapper>
        <Container>
          <SettingsContainer>

            <SettingsLeft>

              <SettingsBox>
                
              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Change Email
                </BoxHeader>

              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Change Password
                </BoxHeader>
              </SettingsBox>

            </SettingsLeft>
            <SettingsRight>

              <SettingsBox>
                
              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Link Accounts
                </BoxHeader>
              </SettingsBox> 
              
            </SettingsRight>
            
          </SettingsContainer>
        </Container>
      </SettingsWrapper>
    );
  }
}

export default Settings;