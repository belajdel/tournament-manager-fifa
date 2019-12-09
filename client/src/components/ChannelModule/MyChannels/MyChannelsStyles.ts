import styled from 'styled-components';

export const MyChannelsContainer = styled.section`
  background: white;
  min-height: 100vh;
  padding-top: 30px;

  & > header {
    display: flex;
    justify-content: center;
  }
`;

export const ChannelsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 40px;

  & > * {
    margin: 10px 20px;
    width: calc(50% - 40px);
  }
`;