import React from 'react';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  LocalPlayersList,
  LocalPlayersHeader,
  MyLocalPlayersContainer
} from './MyLocalPlayersStyles';
import PreviewItem from '../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';
import ColorTypes from '../../../models/ColorTypes';

class MyLocalPlayers extends React.Component {
  render() {

    const LocalPlayerList = [1, 2, 3, 4, 5, 6, 7].map(a => (
      <PreviewItem
        key={a}
        buttonHeader="Player name"
        buttonDescription="Last Active:"
        buttonDescriptionSecondary="Yesterday - 4:04 pm"
        buttonColor={ColorTypes.warning}
        to={`/player&u=${'adsd33dasdas'}`}
      />
    ));
    
    return (
      <Wrapper>
        <Container>
          <MyLocalPlayersContainer>

            <LocalPlayersHeader>
              <PreviewItem
                  buttonHeader="Create Local Player"
                  buttonDescription="Get started by creating a new local player."
                  buttonDescriptionSecondary=""
                  buttonColor={ColorTypes.danger}
                  to="/create/player"
                />
            </LocalPlayersHeader>

            <LocalPlayersList>

              { LocalPlayerList }
              
            </LocalPlayersList>
            
          </MyLocalPlayersContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default MyLocalPlayers;