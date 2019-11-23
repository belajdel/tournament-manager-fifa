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

      <LoginForm>

        <LoginHeader>Log in</LoginHeader>

        {/* Email */}
        <LoginInputContainer>
          <LoginInput 
            placeholder="Email"
            type="email"
          />
        </LoginInputContainer>

        {/* Password */}
        <LoginInputContainer>
          <LoginInput 
            placeholder="Password"
            type="password"
          />
        </LoginInputContainer>
        
        <LoginFooter>
          <LoginButton>
            Log in
          </LoginButton>
        </LoginFooter>

      </LoginForm>
    </LoginContainer>
  );
}

export default Login;