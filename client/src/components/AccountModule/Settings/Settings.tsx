import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  BoxHeader,
  Input,
  InputContainer,
  InputSubmitContainer,
  ThirdPartyIconContainer,
  SettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsBox,
  ThirdPartyContainer,
  ThirdPartyFacebook,
  ThirdPartyGoogle,
  ThirdPartyBox,
  ThirdPartyIcon,
  ChangePasswordButton,
  SelectLeague,
  LeagueOption
} from './SettingsStyles';

const ElonMuskImg = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg';

class Settings extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <SettingsContainer>

            <SettingsLeft>

              <SettingsBox>
                <BoxHeader>
                  My Account
                </BoxHeader>
                <InputContainer>
                  <Input
                    name="accountName"
                    placeholder="Name"
                    type="text"
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    name="location"
                    placeholder="Location"
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

                <InputSubmitContainer>
                  <ChangePasswordButton>
                    Change password
                  </ChangePasswordButton>
                </InputSubmitContainer>

              </SettingsBox>

            </SettingsLeft>
            <SettingsRight>

              <SettingsBox>
                <BoxHeader>
                    My Preferences
                  </BoxHeader>

                <InputContainer>
                  <Input
                    name="favoriteTeam"
                    placeholder="Favourite team"
                    type="text"
                  />
                </InputContainer>

                <InputContainer>
                  <SelectLeague>
                    <LeagueOption value="premierLeague">
                      England Premier League
                    </LeagueOption>
                    <LeagueOption value="laLiga">
                      Spain La Liga
                    </LeagueOption>
                    <LeagueOption value="serieA">
                      Italy Serie A
                    </LeagueOption>
                    <LeagueOption value="bundesliga">
                      Germany 1. Bundesliga
                    </LeagueOption>
                    <LeagueOption value="ligueOne">
                      France Ligue 1
                    </LeagueOption>
                    <LeagueOption value="ligaNOS">
                      Portugal Liga NOS
                    </LeagueOption>
                    <LeagueOption value="eredivisie">
                      Holland Eredivisie
                    </LeagueOption>
                    <LeagueOption value="MLS">
                      USA MLS
                    </LeagueOption>
                    <LeagueOption value="ligaMX">
                      Mexico Liga MX
                    </LeagueOption>
                  </SelectLeague>
                </InputContainer>

              </SettingsBox>

              <SettingsBox>
                <BoxHeader>
                  Link Accounts
                </BoxHeader>

                <ThirdPartyBox>

                  {/* Facebook */}
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
                  {/* End of Facebook */}

                  {/* Google */}
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
                  {/* End of Google */}

                </ThirdPartyBox>
              </SettingsBox>


            </SettingsRight>

          </SettingsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Settings;