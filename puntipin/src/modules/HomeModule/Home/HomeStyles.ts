import styled from 'styled-components';
import ChampionsLeagueImg from '../../../assets/champions-league.jpg';

export const JumbotronContainer = styled.section`
  background: url(${ChampionsLeagueImg}) center center;
  background-size: cover;
  padding: 20px 40px;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const JumbotronLeft = styled.div`
  flex: 1;
`;

export const JumbotronRight = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.75);
  padding: 30px 20px;
  border-radius: 2px;
`;

export const JumbotronHeader = styled.h1`
  color: white;
  font-size: 40px;
`;


export const JumbotronDetails = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.5;
`;

export const Button = styled.button`
  background: none;
  background-color: blue;
  border: 2px solid blue;
  border-radius: 3px;
  color: white;
  margin: 10px;
  padding: 12px 20px;
`;