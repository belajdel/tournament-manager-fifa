import React from 'react';

/**
 * Styles
 */
import {
  AlphabetSearchContainer
} from './AlphabetSearchStyles';

class AlphabetSearch extends React.Component {
  render() {
    
    var ALPHABET = [];
    const BEG = "A".charCodeAt(0),
          END = "Z".charCodeAt(0);
    for(let i = BEG; i <= END; i++) {
      ALPHABET.push(String.fromCharCode(i));
    }
    console.log(ALPHABET);

    const AlphabetList = ALPHABET.map(a => (
      <button key={a}>
        { a }
      </button>
    ));
    AlphabetList.unshift(
      <button key="all">All</button>
    );

    return (
      <AlphabetSearchContainer>

        { AlphabetList }
        
      </AlphabetSearchContainer>      
    );
  }
}

export default AlphabetSearch;