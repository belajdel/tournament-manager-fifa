import styled from 'styled-components';

export const HomeContainer = styled.section`
  background: #F4F4F4;
`;

export const JumbotronContainer = styled.section`
  align-items: center;
  display: flex;
  height: 90vh;
  position: relative;
`;

export const JumbotronLeft = styled.div`
  flex: 1;
`;

export const JumbotronRight = styled.div`
  flex: 1;
  padding: 30px 20px;
  border-radius: 2px;
`;

export const JumbotronHeader = styled.h1`
  color: #044B7F;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 14px;
`;


export const JumbotronDetails = styled.p`
  color: #044B7F;
  font-size: 18px;
  line-height: 2.5;
  text-indent: 20px;
`;

export const Button = styled.button`
  background: none;
  background-color: blue;
  border: 2px solid blue;
  border-radius: 3px;
  margin: 10px;
  padding: 12px 20px;
`;