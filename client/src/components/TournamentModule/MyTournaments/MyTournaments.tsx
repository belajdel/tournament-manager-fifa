import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  TournamentsList,
  TournamentsHeader,
  MyTournamentsContainer
} from './MyTournamentsStyles';
import PreviewLinkItem from '../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';
import ColorTypes from '../../../models/ColorTypes';

class MyTournaments extends React.Component {
  render() {

    const ChannelList = [1, 2, 3, 4, 5, 6, 7].map(a => (
      <PreviewLinkItem
        key={a}
        buttonHeader="Tournament name"
        buttonDescription="Last Active:"
        buttonDescriptionSecondary="Yesterday - 4:04 pm"
        buttonColor={ColorTypes.warning}
        to={`/tournament&t=${'dsa43jfdsf'}`}
      />
    ))
    
    return (
      <Wrapper>
        <Container>
          <MyTournamentsContainer>

            <TournamentsHeader>
              <PreviewLinkItem
                  buttonHeader="Create Tournament"
                  buttonDescription="Get started by creating a new tournament"
                  buttonColor={ColorTypes.secondary}
                  to="/create/tournament"
                />
            </TournamentsHeader>

            <TournamentsList>

              { ChannelList }
              
            </TournamentsList>
            
          </MyTournamentsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyTournaments;