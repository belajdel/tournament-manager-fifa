import React from 'react';

const Login: React.FC = () => {
  return (
    <section className="loginContainer">

      <h1>Log in</h1>

      <div className="formContainer">

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
            placeholder="Password"
            type="password"
          />
        </div>

        <footer>

          <div className="inputContainer">
            <button>Log in</button>
          </div>
          
        </footer>
        
      </div>
      
    </section>
  );
}

export default Login;