import styled from 'styled-components';

type HeaderProps = {
  height: string;
  width?: string;
};

type ButtonProps = {
  height: string;
};

export const HeaderInputContainer = styled.div<HeaderProps>`
  min-height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.width};

  border: 2px solid;
  border-radius: 8px;
  overflow: hidden;

  margin-right: 12px;
`;

export const HeaderContainer = styled.div`
  margin-top: 26px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const buttonContaier = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid;
`;

export const ButtonStyled = styled.button<ButtonProps>`
  min-height: ${props => props.height};
  padding: 6px;
`;
