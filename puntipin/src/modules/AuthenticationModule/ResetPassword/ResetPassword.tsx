import React from 'react';

/**
 * Styles
 */
import { 
  ResetPasswordContainer, 
  ResetPasswordHeader, 
  ResetPasswordFooter, 
  ResetPasswordForm, 
  ResetPasswordInputContainer, 
  ResetPasswordInput, 
  ResetPasswordButton 
} from './ResetPasswordStyles';

const ResetPassword: React.FC = () => {
  return (

    <ResetPasswordContainer>
      <ResetPasswordHeader>Log in</ResetPasswordHeader>

      <ResetPasswordForm>

        {/* Email */}
        <ResetPasswordInputContainer>
          <ResetPasswordInput />
        </ResetPasswordInputContainer>

        {/* Password */}
        <ResetPasswordInputContainer>
          <ResetPasswordInput />
        </ResetPasswordInputContainer>
        
      </ResetPasswordForm>
        <ResetPasswordButton>
          Log in
        </ResetPasswordButton>
      <ResetPasswordFooter>
        
      </ResetPasswordFooter>
    </ResetPasswordContainer>
  );
}

export default ResetPassword;