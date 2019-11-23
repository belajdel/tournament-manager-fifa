import React from 'react';

/**
 * Components
 */
import SignupForm from '../_Shared/SignupForm/SignupForm';

/**
 * Styles
 */
import { 
  JumbotronContainer, 
  JumbotronLeft,
  JumbotronRight, 
  JumbotronHeader,
  JumbotronDetails
} from './HomeStyles';

const Home: React.FC = () => {
  return (
    <section>

      {/* Jumbotron */}
      <JumbotronContainer>
        
        {/* Left Container */}
        <JumbotronLeft>

          <JumbotronHeader>
            How gamers create tournaments
          </JumbotronHeader>

          <JumbotronDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta veritatis reiciendis accusamus voluptatibus!
          </JumbotronDetails>

        </JumbotronLeft>
        {/* End of Left Container */}

        {/* Right Container */}
        <JumbotronRight>

          <SignupForm />

        </JumbotronRight>
        {/* End of Right Container */}

      </JumbotronContainer>
      {/* End of Jumbotron */}

    </section>
  );
}

export default Home;