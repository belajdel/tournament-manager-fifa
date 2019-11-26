import React from 'react';

/**
 * Styles
 */
import {
  Button,
  InputContainer,
  Input,
  Form,
  Signup,
  SignupLink,
  ResetPasswordWrapper,
  ResetPasswordContainer
} from './ResetPasswordStyles';
import { Container } from '../../../styles/Global';

class ResetPassword extends React.Component {
  state = {
    email: ''
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
      <ResetPasswordWrapper>
        <Container>
          <ResetPasswordContainer>

            <Form>

              <h1>Reset Password</h1>

              <InputContainer>
                <Input 
                  name="email"
                  onChange={this.handleChangeInput}
                  placeholder="Email address"
                  type="email"
                />
              </InputContainer>

              <Signup>
                <SignupLink to="/signup">
                  Don't have an account?
                </SignupLink>
              </Signup>

              <InputContainer>
                <Button>
                  Send reset email
                </Button>
              </InputContainer>
              
            </Form>

          </ResetPasswordContainer>
        </Container>
      </ResetPasswordWrapper>
    );
  }
  
}

export default ResetPassword;