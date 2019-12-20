import styled from 'styled-components';

export const StepThreeContainer = styled.section`

`;

/**
 * Content Container
 */
export const ContentContainer = styled.div``;

export const ContentRow = styled.div``;

/**
 * [First Row]
 */
export const FirstRow = styled(ContentRow)`
  display: flex;
`;

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
export const SecondRow = styled(ContentRow)``;

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
  padding: 20px;
`;

export const PlayersAddedRightContainer = styled.section`
  flex: 1;
  padding: 20px;
`;

/**
 * [Player Added]
 */
export const PlayersAdded = styled.button`
  background: #F4F4F4;
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #CCC;
  border-radius: 2px;
`;

export const PlayersAddedButton = styled.div`
  background: none;
  border: none;
  display: block;
  margin-right: 10px;
`;

export const RequestButtonIcon = styled.img`
  display: block;
  height: 15px;
  width: 15px;
`;

export const PlayersAddedEmail = styled.p`
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

/**
 * Input Container
 */
export const PlayersAddedInputBox = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
`;

export const PlayersAddedInput = styled.input`
  display: block;
  border: 1px solid #CCC;
  background: white;
  padding: 10px;
  width: 100%;
`;

/**
 * [Row 3]
 */
export const ThirdRow = styled(ContentRow)`
  background: #F4F4F4;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 20px 0;
  align-items: center;
`;

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
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

export const NumberAddedStrong = styled.span`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 44px;
  font-weight: bold;
`;