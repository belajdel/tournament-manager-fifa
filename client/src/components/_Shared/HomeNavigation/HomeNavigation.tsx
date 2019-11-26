import React from 'react';

/**
 * Styles
 */
import { 
  Button,
  
  HomeNavContainer,
  NavContainer, 
  NavHeader,
  Form,
  
  ListItemLink,
  ListItem, 
  AuthList,
  NavigatorContainer,
  InputContainer,
  InputLabel,
  Input
} from './HomeNavigationStyles';
import { Container } from '../../../styles/Global';

class HomeNavigation extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();

  }
  
  render() {
    return (
      <HomeNavContainer>
        <Container>
          <NavContainer>
  
            <NavHeader>
              puntipin
            </NavHeader>
  
            <Form>
              <InputContainer>
                <InputLabel>Email</InputLabel>
                <Input 
                  name="email"
                  onChange={this.handleInputChange}
                  placeholder="Email"
                  type="email"
                />
              </InputContainer>
              
              <InputContainer>
                <InputLabel>Password</InputLabel>
                <Input 
                  name="email"
                  onChange={this.handleInputChange}
                  placeholder="Password"
                  type="password"
                />
              </InputContainer>
              
              <InputContainer>
                <Button onClick={this.handleSubmit}>
                  Log in
                </Button>
              </InputContainer>
              
            </Form>
            
          </NavContainer>
        </Container>
      </HomeNavContainer>
    );
  }
}

export default HomeNavigation;