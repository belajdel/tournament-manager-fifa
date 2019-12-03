import React from 'react';

/**
 * Styles
 */
import {
  LocalPlayerPreviewContainer,
  LocalPlayerPreviewLeft,
  LocalPlayerPreviewRight,
  LocalPlayerPreviewInfo,
  LocalPlayerPreviewButton,
  LocalPlayerPreviewIcon,
  InfoActivity,
  ActivityDate,

} from './LocalPlayerPreviewStyles';

class LocalPlayerPreview extends React.Component {
  render() {
    return (
      <LocalPlayerPreviewContainer>

        <LocalPlayerPreviewLeft>
          <LocalPlayerPreviewIcon></LocalPlayerPreviewIcon>

          <LocalPlayerPreviewInfo>
            <h1>Local name</h1>  
            <InfoActivity>
              Last active: <ActivityDate>Yesterday 4:04 pm</ActivityDate>
            </InfoActivity>
          </LocalPlayerPreviewInfo>
        </LocalPlayerPreviewLeft>

        <LocalPlayerPreviewRight>
          <LocalPlayerPreviewButton>
            View profile
          </LocalPlayerPreviewButton>
        </LocalPlayerPreviewRight>
        
      </LocalPlayerPreviewContainer>
    );
  }
}

export default LocalPlayerPreview;