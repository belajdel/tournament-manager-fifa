import styled from 'styled-components';
import ChampionsLeagueImg from '../../../assets/champions-league.jpg'; 

export const LoginContainer = styled.section`
  background: url(${ChampionsLeagueImg}) center center;
  background-size: cover;
  padding: 20px 40px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const LoginHeader = styled.h1`
  color: white;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const LoginForm = styled.form`
  background: rgba(0, 0,0 , 0.5);
  padding: 20px;
  min-width: 500px;
`;

export const LoginInputContainer = styled.div`
  /* ... */
`;

export const LoginInput = styled.input`
  /* ... */
  outline: none;
  border: none;
  padding: 10px;
  margin: 6px 0 10px 0;
  width: 100%;
`;

export const LoginFooter = styled.footer`
  margin: 20px 0;
`;

export const LoginButton = styled.button`
  border: none;
  background: darkblue;
  color: white;
  cursor: pointer;
  padding: 8px 16px;
`;