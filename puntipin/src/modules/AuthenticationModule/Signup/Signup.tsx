import React from 'react';

/**
 * Styles
 */
import { 
  SignupContainer, 
  SignupHeader, 
  SignupFooter, 
  SignupForm, 
  SignupInputContainer, 
  SignupInput, 
  SignupButton 
} from './SignupStyles';

const Signup: React.FC = () => {
  return (

    <SignupContainer>
      <SignupHeader>Log in</SignupHeader>

      <SignupForm>

        {/* Name */}
        <SignupInputContainer>
          <SignupInput />
        </SignupInputContainer>

        {/* Email */}
        <SignupInputContainer>
          <SignupInput />
        </SignupInputContainer>

        {/* Password */}
        <SignupInputContainer>
          <SignupInput />
        </SignupInputContainer>

        {/* Confirm Password */}
        <SignupInputContainer>
          <SignupInput />
        </SignupInputContainer>
        
      </SignupForm>
        <SignupButton>
          Sign up
        </SignupButton>
      <SignupFooter>
        
      </SignupFooter>
    </SignupContainer>
  );
}

export default Signup;