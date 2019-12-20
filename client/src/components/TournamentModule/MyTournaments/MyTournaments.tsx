import React from 'react';

/**
 * Components
 */
import PreviewTournamentLinkItem from '../../_Shared/Buttons/PreviewTournamentLinkItem/PreviewTournamentLinkItem';

/**
 * Icons
 */
import SearchIcon from '../../../assets/icons/icon-search.png';

/**
 * Styles
 */
import { Container, Wrapper } from '../../../styles/Global';
import {
  TournamentsList,
  TournamentsHeader,
  MyTournamentsContainer,
  TournamentsQueryContainer,
  QueryLeftContainer,
  QueryRightContainer,
  QuerySearchInput,
  InputContainer,
  SelectInput,
  InputOption,
  QuerySearchInputContainer,
  SearchInputIconContainer,
  SearchInputIcon,
} from './MyTournamentsStyles';

/**
 * Types
 */
import ColorTypes from '../../../models/ColorTypes';
import PreviewLinkItem from '../../_Shared/Buttons/PreviewLinkItem/PreviewLinkItem';

class MyTournaments extends React.Component {
  render() {

    const ChannelList = [1, 2, 3, 4, 5, 6, 7].map(a => (
      <PreviewTournamentLinkItem
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

            <TournamentsQueryContainer>

              <QueryLeftContainer>

              <InputContainer>
                <SelectInput>
                  <InputOption value="premierLeague">
                    Sort by
                  </InputOption>
                  <InputOption value="laLiga">
                    Spain La Liga
                  </InputOption>
                  <InputOption value="serieA">
                    Italy Serie A
                  </InputOption>
                  <InputOption value="bundesliga">
                    Germany 1. Bundesliga
                  </InputOption>
                  <InputOption value="ligueOne">
                    France Ligue 1
                  </InputOption>
                  <InputOption value="ligaNOS">
                    Portugal Liga NOS
                  </InputOption>
                  <InputOption value="eredivisie">
                    Holland Eredivisie
                  </InputOption>
                  <InputOption value="MLS">
                    USA MLS
                  </InputOption>
                  <InputOption value="ligaMX">
                    Mexico Liga MX
                  </InputOption>
                </SelectInput>
              </InputContainer>
                  
              </QueryLeftContainer>

              <QueryRightContainer>
                
                <QuerySearchInputContainer>
                  <SearchInputIconContainer>
                    <SearchInputIcon 
                      alt=""
                      src={SearchIcon}
                    />
                  </SearchInputIconContainer>
                  <QuerySearchInput
                    placeholder="Search for a tournament"
                    type="text"
                  />
                </QuerySearchInputContainer>
                
              </QueryRightContainer>

            </TournamentsQueryContainer>

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