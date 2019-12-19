import React from 'react';

/**
 * Icons
 */
import TrophyIcon from '../../../../assets/tournament-icons/icon-trophy.png';

/**
 * Styles
 */
import {
  TournamentHeaderContainer,
  HeaderLeft,
  LeftIconContainer,
  LeftIcon,
  LeftContent,
  TournamentType,
  TournamentTypeDesc,
  LeftFooter,
  TournamentParticipants,
  ParticipantsNumber,
  HeaderCenter,
  CenterButton,
  CenterButtonIcon,
  HeaderRight,
  RightHeader,
  DateTitle,
  DateDesc,
  RightPlacing,
  PlaceItem,
  PlaceIcon,
  SettingsIconContainer,
  SettingsButton,
  SettingsIcon,
} from './TournamentHeaderStyles';

class TournamentHeader extends React.Component {
  render() {
    return (
      <TournamentHeaderContainer>

        <HeaderLeft>
          
          <LeftIconContainer>
            <LeftIcon 
              src={TrophyIcon}
            />
          </LeftIconContainer>
          
          <LeftContent>
            <h1>Tournament name</h1>
            
            <TournamentType>
              Type: <TournamentTypeDesc>Group</TournamentTypeDesc>
            </TournamentType>

            <LeftFooter>
              <TournamentParticipants>
                <ParticipantsNumber>6</ParticipantsNumber> members
              </TournamentParticipants>
              <TournamentParticipants>
                <ParticipantsNumber>9</ParticipantsNumber> players
              </TournamentParticipants>
            </LeftFooter>
            
          </LeftContent>
          
        </HeaderLeft>

        <HeaderCenter>
          <CenterButton>
            <CenterButtonIcon 
              alt="buttonIcon"
              src={TrophyIcon}
            />
          </CenterButton>
          <CenterButton>
            <CenterButtonIcon 
              alt="buttonIcon"
              src={TrophyIcon}
            />
          </CenterButton>
          <CenterButton>
            <CenterButtonIcon 
              alt="buttonIcon"
              src={TrophyIcon}
            />
          </CenterButton>
        </HeaderCenter>

        <HeaderRight>

          <RightHeader>
            <DateTitle>
              Created On: <DateDesc>September 25, 2017</DateDesc>
            </DateTitle>
            <DateTitle>
              Last Modified: <DateDesc>September 25, 2017</DateDesc>
            </DateTitle>
          </RightHeader>
          
          <RightPlacing>
            
            <PlaceItem>
              <PlaceIcon />
              <h1>1st Place</h1>
            </PlaceItem>
            
            <PlaceItem>
              <PlaceIcon />
              <h1>2nd Place</h1>
            </PlaceItem>
            
            <SettingsButton>
              <SettingsIconContainer>
                <SettingsIcon 
                  alt="settingsIcon"
                  src={TrophyIcon}
                />
              </SettingsIconContainer>
              <h1>Settings</h1>
            </SettingsButton>
          </RightPlacing>

        </HeaderRight>
        
      </TournamentHeaderContainer>
    );
  }
}

export default TournamentHeader;