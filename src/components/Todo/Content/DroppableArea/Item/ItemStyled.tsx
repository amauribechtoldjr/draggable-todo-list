import styled from 'styled-components';
import { COLORS } from '../../../../colors';

interface ItemProps {
  type: string;
}

export const ItemContainer = styled.div<ItemProps>`
  min-height: 30px;
  width: 100%;
  max-width: 290px;

  background-color: ${props =>
    props.type == 'todo'
      ? COLORS.todoItemBackground
      : COLORS.todoItemBackground2};

  border-radius: 8px;
  border: 2px solid ${COLORS.todoItemBorder};

  -webkit-background-clip: padding-box;
  background-clip: padding-box;

  margin: 10px 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;

  display: flex;
  flex-direction: column;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    cursor: auto;
  }
`;

export const ContentItemContainer = styled.div`
  font-weight: 500;
  color: ${COLORS.todoItemContent};
  word-wrap: break-word;
`;

export const OptionsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4;

  color: ${COLORS.todoItemContent};

  flex-basis: 0.2;
  display: flex;
  flex-direction: row;
`;

export const IconContainer = styled.div`
  margin: 4px;

  &:hover {
    cursor: pointer;
  }
`;
