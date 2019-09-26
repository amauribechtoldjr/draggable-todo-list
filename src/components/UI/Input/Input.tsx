import * as React from 'react';
import * as st from './InputStyled';

export interface InputStateProps {
  text: string | number | string[];
}

const Input: React.FC<InputPropsFC> = ({ textValue, ...InputProps }) => {
  const _onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (InputProps.pressEnter && event.key === 'Enter') {
      InputProps.pressEnter(InputProps.value);
    }
  };

  return (
    <st.InputContainer width={InputProps.width} height={InputProps.height}>
      <st.InputStyled {...(InputProps as any)} onKeyDown={_onKeyDown} />
    </st.InputContainer>
  );
};

export interface InputPropsFC
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  centralized?: boolean;
  pressEnter?: (text: string | number | string[]) => void;
  textValue?: string;
  resetText?: boolean;
}

Input.defaultProps = {
  centralized: false,
  resetText: true,
  textValue: '',
};

export default Input;
