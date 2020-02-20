import React from 'react';

/**
 * Styles
 */
import { 
  Button,
  ForgotPasswordLink,  
  HomeNavContainer,
  NavContainer, 
  NavHeader,
  Form,
  FormRow,
  InputContainer,
  InputLabel,
  Input
} from './HomeNavigationStyles';
import { Container } from '../../../../styles/Global';

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
  
            <NavHeader to="/">
              puntipin
            </NavHeader>
  
            <Form>
              <FormRow>
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
              </FormRow>

              <FormRow>
                <ForgotPasswordLink to="/reset-password">
                    Forgot password?
                  </ForgotPasswordLink>
              </FormRow>
              
            </Form>
            
          </NavContainer>
        </Container>
      </HomeNavContainer>
    );
  }
}

export default HomeNavigation;