import React from 'react';

/**
 * Styles
 */
import {
  StepHeader,
  StepNumber
} from './CreateStepHeaderStyles';

interface CreateStepHeaderProps {
  number: number;
  title: string;
}

const CreateStepHeader = (props: CreateStepHeaderProps) => (
  <StepHeader>
    <StepNumber>{props.number}. </StepNumber>{props.title}
  </StepHeader>
);

export default CreateStepHeader;