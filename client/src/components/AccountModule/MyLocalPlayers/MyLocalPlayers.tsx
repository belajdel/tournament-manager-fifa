import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  MyLocalPlayersWrapper,
  MyLocalPlayersContainer,
  LocalPlayersHeader,
  LocalPlayersList,
  CreateLocalPlayerContainer,
  CreateLocalPlayerLeft,
  CreateLocalPlayerIcon,
  HeaderLeft,
  HeaderRight,
  CreateLocalPlayerContent,
  CreateLocalPlayerButton,
  CreateLocalPlayerContentRight,
  CreateLocalPlayerRight
} from './MyLocalPlayersStyles';
import LocalPlayerPreview from '../../_Shared/LocalPlayerPreview/LocalPlayerPreview';
import AlphabetSearch from '../../_Shared/AlphabetSearch/AlphabetSearch';

class MyLocalPlayers extends React.Component {
  render() {
    return (
      <MyLocalPlayersWrapper>
        <Container>
          <MyLocalPlayersContainer>

            <LocalPlayersHeader>
              <header>
                <h1>My Local Players</h1>
              </header>

              <section>

                <HeaderLeft>

                  <CreateLocalPlayerContainer>
                    <CreateLocalPlayerLeft>
                      <CreateLocalPlayerIcon></CreateLocalPlayerIcon>
                      <CreateLocalPlayerContent>
                        <h1>Create local player</h1>
                        <p>New friend to network of channels</p>
                      </CreateLocalPlayerContent>
                    </CreateLocalPlayerLeft>
                    <CreateLocalPlayerRight>
                      <CreateLocalPlayerButton>
                        Add new
                      </CreateLocalPlayerButton>
                    </CreateLocalPlayerRight>
                  </CreateLocalPlayerContainer>
                  
                </HeaderLeft>

                <HeaderRight>
                  <input 
                    name="localPlayerSearch"
                    placeholder="Search for local player"
                    type="text"
                  />
                </HeaderRight>

                
              </section>

              <AlphabetSearch />
              
            </LocalPlayersHeader>

            <LocalPlayersList>

              <LocalPlayerPreview />
              <LocalPlayerPreview />
              <LocalPlayerPreview />
              <LocalPlayerPreview />
              <LocalPlayerPreview />
              <LocalPlayerPreview />
              
            </LocalPlayersList>
            
          </MyLocalPlayersContainer>
        </Container>
      </MyLocalPlayersWrapper>
    );
  } 
}

export default MyLocalPlayers;