import React from 'react';
import { 
  JumbotronContainer, Button 
} from './HomeStyles';

const Home: React.FC = () => {
  return (
    <section>

      {/* Jumbotron */}
      <JumbotronContainer>
        
        <div className="jumbotronLeft">

          <h1>How gamers create tournaments</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta veritatis reiciendis accusamus voluptatibus!
          </p>
          
        </div>

        <div className="jumbotronRight">

          <section className="formContainer">

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

                    <Button>
                      Facebook
                    </Button>

                    <button>Facebook</button>
                  </div>

                  <div className="inputContainerRight">
                    <button>Google</button>
                  </div>
                                    
                </div>
              </footer>
              
            </form>
            
          </section>
          
        </div>

      </JumbotronContainer>

    </section>
  );
}

export default Home;