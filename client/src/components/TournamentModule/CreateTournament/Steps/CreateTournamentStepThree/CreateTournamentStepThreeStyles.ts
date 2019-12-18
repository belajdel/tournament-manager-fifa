import styled from 'styled-components';

export const StepThreeContainer = styled.section`

`;

/**
 * Content Container
 */
export const ContentContainer = styled.div``;

export const ContentRow = styled.div``;

export const FirstRow = styled(ContentRow)`
  display: flex;
`;

export const SecondRow = styled(ContentRow)``;

export const ThirdRow = styled(ContentRow)`
  background: #F4F4F4;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 20px 0;
  align-items: center;
`;

/**
 * [First Row]
 */
export const AddMembersLeftContainer = styled.div`
  flex: 1;
`;

export const AddMembersRightContainer = styled.div`
  flex: 1;
`;

export const AddMembersHeader = styled.header`

  & > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;
  }
`;

export const SearchInputContainer = styled.div`
  padding: 10px 20px;
`;

export const SearchInput = styled.input`
  border: 1px solid #CCC;
  display: block;
  border-radius: 2px;
  padding: 8px;
  widtH: 100%;
`;

export const MembersListContainer = styled.div`
  padding: 20px;
`;

/**
 * [Second Row]
 */
export const PlayersAddedHeader = styled.h1`
  padding: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
`;

export const PlayersAddedContent = styled.section`
  display: flex;
`;

export const PlayersAddedLeftContainer = styled.section`
  flex: 1;
`;

export const PlayersAddedRightContainer = styled.section`
  flex: 1;
`;

/**
 * [Player Added]
 */
export const PlayersAdded = styled.div`

  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #CCC;
  border-radius: 2px;
`;

export const PlayersAddedButton = styled.button`
  background: none;
  border: none;
  display: block;
  margin-right: 10px;
`;

export const RequestButtonIcon = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`;

export const PlayersAddedEmail = styled.p`
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

/**
 * Input Container
 */
export const PlayersAddedInputBox = styled.div`

`;

export const PlayersAddedInput = styled.input`
  display: block;
`;

/**
 * [Row 3]
 */
const NumberPlayersDesc = styled.p`
  color: red;
  font-size: 15px;
`;

export const Min = styled(NumberPlayersDesc)`
  text-align: left;
`;

export const Max = styled(NumberPlayersDesc)`
  text-align: right;
`;

export const NumberAdded = styled.h1`
  font-size: 36px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

export const NumberAddedStrong = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
  color: red;
  font-weight: bold;
`;