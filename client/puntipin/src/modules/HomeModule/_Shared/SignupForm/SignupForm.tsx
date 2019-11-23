import React from 'react';

import { 
  Button,
  Form, 
  InputContainer, 
  Input
} from './SignupFormStyes';

class SignupForm extends React.Component {

  handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('Test')
  }
  
  render () {
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
  
        {/* Email */}
        <InputContainer>
          <Input
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
          />
        </InputContainer>
  
        {/* Password */}
        <InputContainer>
          <Input 
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </InputContainer>
  
        {/* Confirm Password */}
        <InputContainer>
          <Input 
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
          />
        </InputContainer>

        <InputContainer>
          <Button>Sign up</Button>
        </InputContainer>
        
        <div className="inputContainer">
          <button>Sign up</button>
        </div>
  
        <footer className="inputFooterContainer">
          <h1>or sign up with:</h1>
          <div className="inputContainer">
  
            <div className="inputContainerLeft">
  
              {/* <Button>
                Facebook
              </Button> */}
  
              <button>Facebook</button>
            </div>
  
            <div className="inputContainerRight">
              <button>Google</button>
            </div>
                              
          </div>
        </footer>
  
      </Form>
    );
  }
  
}

export default SignupForm;