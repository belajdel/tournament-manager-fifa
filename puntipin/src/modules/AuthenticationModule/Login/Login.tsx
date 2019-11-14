import React from 'react';

/**
 * Styles
 */
import { 
  LoginContainer, 
  LoginHeader, 
  LoginFooter, 
  LoginForm, 
  LoginInputContainer, 
  LoginInput, 
  LoginButton 
} from './LoginStyles';

const Login: React.FC = () => {
  return (

    <LoginContainer>
      <LoginHeader>Log in</LoginHeader>

      <LoginForm>

        {/* Email */}
        <LoginInputContainer>
          <LoginInput />
        </LoginInputContainer>

        {/* Password */}
        <LoginInputContainer>
          <LoginInput />
        </LoginInputContainer>
        
      </LoginForm>
        <LoginButton>
          Log in
        </LoginButton>
      <LoginFooter>
        
      </LoginFooter>
    </LoginContainer>
  );
}

export default Login;