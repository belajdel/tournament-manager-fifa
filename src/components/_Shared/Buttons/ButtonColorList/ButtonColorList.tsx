import React from 'react';

/**
 * Styles
 */
import {
  ColorsList,
  ColorItem,
} from './ButtonColorListStyles';
import ColorTypes from '../../../../models/ColorTypes';

class ButtonColorList extends React.Component {

  handleColorChange = (buttonColor: ColorTypes) => {
    /**
     * TODO
     */
  }
  
  render() {
    return (
      <ColorsList>
        <ColorItem
          onClick={() => this.handleColorChange(ColorTypes.primary)}
          buttonColor={ColorTypes.primary}
        />
        <ColorItem 
          onClick={() => this.handleColorChange(ColorTypes.secondary)}
          buttonColor={ColorTypes.secondary}
        />
        <ColorItem 
          onClick={() => this.handleColorChange(ColorTypes.success)}
          buttonColor={ColorTypes.success}
        />
        <ColorItem 
          onClick={() => this.handleColorChange(ColorTypes.danger)}
          buttonColor={ColorTypes.danger}
        />
        <ColorItem 
          onClick={() => this.handleColorChange(ColorTypes.warning)}
          buttonColor={ColorTypes.warning}
        />
        <ColorItem 
          onClick={() => this.handleColorChange(ColorTypes.info)}
          buttonColor={ColorTypes.info}
        />
      </ColorsList>
    );
  }
} 

export default ButtonColorList;