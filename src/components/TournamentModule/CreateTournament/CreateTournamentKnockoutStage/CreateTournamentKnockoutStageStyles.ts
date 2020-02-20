import styled from 'styled-components';

export const TournamentKnockoutStageContainer = styled.section`

`;

export const KnockoutStageContainer = styled.section`

`;

export const KnockoutStageHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  & > h1 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  & > p {
    font-family: 16px;
    margin-bottom: 10px;
  }
`;

export const KnockoutStageContent = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 10px 0;
`;

/**
 * [Setting Item]
 */
export const SettingItem = styled.div`
  margin: 0 20px;

  & > h1 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const ItemOptions = styled.div`

`;

export const ItemBox = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  width: 100%;
  
  & > p {
    font-family: 16px;
    margin-left: 10px;
  }
`;

export const BoxIcon = styled.div`
  background: none;
  border: 2px solid blue;
  border-radius: 50%;
  height: 30px;
  cursor: pointer;
  width: 30px;

  &:hover {
    background: lightblue;
  }
`;
