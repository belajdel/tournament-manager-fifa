import React from 'react';

import { 
  Form
} from './SignupFormStyes';

const SignupForm: React.FC = () => {
  return (
    <Form>
      <form>

        <div className="inputContainer">
          <input 
            id="email"
            name="email"
            placeholder="Email address" 
            type="email" 
          />
        </div>

        <div className="inputContainer">
          <input 
            id="password" 
            name="password" 
            placeholder="Create password" 
            type="password" 
          />
        </div>

        <div className="inputContainer">
          <input 
            id="confirmPassword" 
            name="confirmPassword" 
            placeholder="Confirm password" 
            type="password" 
          />
        </div>

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

        </form>
    </Form>
  );
}

export default SignupForm;