import React from 'react';

import {
  SearchInputContainer,
  InputIconContainer,
  InputIcon,
  Input,
} from './SearchInputStyles';

interface SearchInputProps {
  name: string;
  placeholder: string;
  onChange: any;
}

function SearchInput(props: SearchInputProps) {
  return (
    <SearchInputContainer>
      <InputIconContainer>
        <InputIcon />
      </InputIconContainer>
    
      <Input 
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        type="text"
      />
    </SearchInputContainer>
  );
}

export default SearchInput;