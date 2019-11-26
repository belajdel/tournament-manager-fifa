import React from 'react';

import { 
  Button,
  FacebookButton,
  GoogleButton,
  Form, 
  InputContainer, 
  Input,
  FormHeader,
  FooterContainer,
  FooterButtonContainer,
  FormSubmitContainer
} from './SignupFormStyes';

class SignupForm extends React.Component {

  state = {
    emai: '',
    password: '',
    confirmPassword: ''
  }

  handleInputChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFacebookSignup = () => {

  }

  handleGoogleSignup = () => {

  }
  
  handleSubmit = (e: any) => {
    e.preventDefault();

  }
  
  render () {
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        <FormHeader>
          <h1>Signup</h1>
          <p>Get started in seconds!</p>
        </FormHeader>
        
        {/* Email */}
        <InputContainer>
          <Input
            name="email"
            placeholder="Email address"
            onChange={this.handleInputChange}
            type="email"
          />
        </InputContainer>
  
        {/* Password */}
        <InputContainer>
          <Input 
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            type="password"
          />
        </InputContainer>
  
        {/* Confirm Password */}
        <InputContainer>
          <Input 
            name="confirmPassword"
            onChange={this.handleInputChange}
            placeholder="Confirm password"
            type="password"
          />
        </InputContainer>

        <FormSubmitContainer>
          <Button>Sign up</Button>
        </FormSubmitContainer>

        <FooterContainer>
          <p>or sign up with:</p>

          <FooterButtonContainer>
            <FacebookButton onClick={this.handleFacebookSignup}>
              Facebook
            </FacebookButton>
            <GoogleButton onClick={this.handleGoogleSignup}>
              Google
            </GoogleButton>
          </FooterButtonContainer>
          
        </FooterContainer>

      </Form>
    );
  }
  
}

export default SignupForm;