import React from 'react';

/**
 * Styles
 */
import {
  Button,
  InputContainer,
  Input,
  Form,
  SignupWrapper,
  ForgotPasswordLink,
  ForgotPassword,
  SignupContainer
} from './SignupStyles';
import { Container } from '../../../styles/Global';

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChangeInput = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();

    /**
     * @TODO
     */
  }

  render() {
    return (
      <SignupWrapper>
        <Container>
          <SignupContainer>

            <Form>

              <h1>Sign up</h1>

              <InputContainer>
                <Input 
                  name="email"
                  onChange={this.handleChangeInput}
                  placeholder="Email address"
                  type="email"
                />
              </InputContainer>

              <InputContainer>
                <Input 
                  name="password"
                  onChange={this.handleChangeInput}
                  placeholder="Password"
                  type="password"
                />
              </InputContainer>

              <InputContainer>
                <Input 
                  name="confirmPassword"
                  onChange={this.handleChangeInput}
                  placeholder="Confirm password"
                  type="password"
                />
              </InputContainer>

              <ForgotPassword>
                <ForgotPasswordLink to="/reset-password">
                  Forgot your password?
                </ForgotPasswordLink>
              </ForgotPassword>

              <InputContainer>
                <Button>
                  Sign up
                </Button>
              </InputContainer>
              
            </Form>

          </SignupContainer>
        </Container>
      </SignupWrapper>
    );
  }
  
}

export default Signup;