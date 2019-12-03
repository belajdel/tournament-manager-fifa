import React from 'react';

/**
 * Styles
 */
import { Container } from '../../../styles/Global';
import {
  Button,
  CreateBox,
  CreateForm,
  CreateHeader,
  CreateLabel,
  CreateLabelNumber,
  CreateLabelOptional,
  CreateLocalPlayerWrapper,
  CreateLocalPlayerContainer,
  FormFooterButtonContainer,
  Input,
  IconColor,
  InputContainer,
  IconColorsContainer,
  LinkContainer,
} from './CreateLocalPlayerStyles';

class CreateLocalPlayer extends React.Component {
  render() {
    return (
      <CreateLocalPlayerWrapper>
        <Container>
          <CreateLocalPlayerContainer>
  
            <CreateHeader>
              <h1>Create Local Player</h1>
              <button>Cancel</button>
            </CreateHeader>

            <CreateForm>

              <CreateBox>
                <CreateLabel>
                  <CreateLabelNumber>1. </CreateLabelNumber>Choose icon color
                </CreateLabel>
                <IconColorsContainer>
                  <IconColor />
                  <IconColor />
                  <IconColor />
                  <IconColor />
                </IconColorsContainer>
              </CreateBox>

              <CreateBox>
                <CreateLabel>
                  <CreateLabelNumber>2. </CreateLabelNumber>Name the local player
                </CreateLabel>
                <InputContainer>
                  <Input 
                    name="localPlayerName"
                    placeholder="Local player name"
                  />
                </InputContainer>
              </CreateBox>

              <CreateBox>
                <CreateLabel>
                  <CreateLabelNumber>3. </CreateLabelNumber>Link to Member <CreateLabelOptional>OPTIONAL</CreateLabelOptional>
                </CreateLabel>
                <LinkContainer>
                  <Input 
                    name="memberName"
                    placeholder="Member to link"
                  />
                  <Button>
                    Link
                  </Button>
                  <Input 
                    name="localPlayerName"
                    value="Eduardo"
                    disabled
                  />
                </LinkContainer>
              </CreateBox>

              <CreateBox>
                <CreateLabel>
                  <CreateLabelNumber>4. </CreateLabelNumber>Done!
                </CreateLabel>
                <FormFooterButtonContainer>
                  <Button>
                    Create player
                  </Button>
                  <Button>
                    Cancel
                  </Button>
                </FormFooterButtonContainer>
                  
              </CreateBox>
              
            </CreateForm>
  
            
          </CreateLocalPlayerContainer>
        </Container>
      </CreateLocalPlayerWrapper>
    );
  }
}

export default CreateLocalPlayer;