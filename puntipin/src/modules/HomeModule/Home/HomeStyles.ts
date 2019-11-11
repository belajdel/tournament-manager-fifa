import styled from 'styled-components';
import ChampionsLeagueImg from '../../../assets/champions-league.jpg';

export const JumbotronContainer = styled.section`
  background: url(${ChampionsLeagueImg}) center center;
  background-size: cover;
  padding: 20px;
  height: 90vh;
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