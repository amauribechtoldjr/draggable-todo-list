import styled from 'styled-components';
import { ReactText } from 'react';
import { InputPropsFC } from './Input';

export interface InputContainerProps {
  width: ReactText;
  height: ReactText;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: blue;
`;

export const LabelContainer = styled.span`
  background-color: blue;
  flex: 1;
  font-weight: 400;
`;

export const InputStyled = styled.input<InputPropsFC>`
  text-align: ${props => (props.centralized ? 'center' : 'start')};
  height: 100%;

  flex: 1;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
`;
