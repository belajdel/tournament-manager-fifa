import React from 'react';
import { Container } from '../../../styles/Global';
import {
  BoxHeader,
  Input,
  InputContainer,
  ThirdPartyIconContainer,
  SettingsWrapper,
  SettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsBox,
  ThirdPartyContainer,
  ThirdPartyFacebook,
  ThirdPartyGoogle,
  ThirdPartyBox,
  ThirdPartyIcon,
  ThirdPartyButton
} from './SettingsStyles';

const ElonMuskImg = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg';

class Settings extends React.Component {
  render() {
    return (
      <SettingsWrapper>
        <Container>
          <SettingsContainer>

            <SettingsLeft>

              <SettingsBox>
                <BoxHeader>
                  Account basics
                </BoxHeader>
                <InputContainer>
                  <Input 
                    name="accountName"
                    placeholder="Account name"
                    type="text"
                  />
                </InputContainer>
              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Change Email
                </BoxHeader>

                <InputContainer>
                  <Input 
                    name="currentEmail"
                    placeholder="Current email address"
                    type="email"
                  />
                </InputContainer>

                <InputContainer>
                  <Input 
                    name="secondaryEmail"
                    placeholder="Secondary email address"
                    type="email"
                  />
                </InputContainer>

              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Change Password
                </BoxHeader>
                
                <InputContainer>
                  <Input 
                    name="currentPassword"
                    placeholder="Current password"
                    type="password"
                  />
                </InputContainer>

                <InputContainer>
                  <Input 
                    name="newPassword"
                    placeholder="Create a new password"
                    type="password"
                  />
                </InputContainer>

                <InputContainer>
                  <Input 
                    name="newPasswordConfirm"
                    placeholder="Confirm your new password"
                    type="password"
                  />
                </InputContainer>
                
              </SettingsBox>

            </SettingsLeft>
            <SettingsRight>

              <SettingsBox>

                <InputContainer>
                  <Input 
                    name="favoriteTeam"
                    placeholder="Favourite team"
                    type="text"
                  />
                </InputContainer>

                <InputContainer>
                  <select>
                    <option value="bundesliga">Bundesliga</option>
                    <option value="mls">MLS</option>
                    <option value="premierLeague">Premier League</option>
                    <option value="serieA">Serie A</option>
                  </select>
                </InputContainer>
                
              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Link Accounts
                </BoxHeader>
                <ThirdPartyBox>

                  <ThirdPartyContainer>
                    <header>
                      <ThirdPartyIconContainer>
                        <ThirdPartyIcon 
                          src={ElonMuskImg}
                        />
                      </ThirdPartyIconContainer>
                      <h1>Eduardo Garza</h1>
                    </header>
                    <ThirdPartyFacebook>
                      Unlink Facebook
                    </ThirdPartyFacebook>
                  </ThirdPartyContainer>

                  <ThirdPartyContainer>
                    <header>
                      <ThirdPartyIconContainer>

                      </ThirdPartyIconContainer>
                      <h1>Account name</h1>
                    </header>
                    <ThirdPartyGoogle>
                      Link Google
                    </ThirdPartyGoogle>
                  </ThirdPartyContainer>
                  
                </ThirdPartyBox> 
              </SettingsBox>

              
            </SettingsRight>
            
          </SettingsContainer>
        </Container>
      </SettingsWrapper>
    );
  }
}

export default Settings;