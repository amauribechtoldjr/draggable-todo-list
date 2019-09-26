import styled from 'styled-components';
import { COLORS } from '../../../colors';
import { DroppableProps } from 'react-beautiful-dnd';

interface DroppableContainerProps {
  type: string;
}

export const DroppableAreaContainer = styled.div<DroppableContainerProps>`
  background-color: ${COLORS.todoListBackground};

  border-radius: 6px;
  border: 2px solid rgba(175, 175, 175, 0.5);

  margin: 10px;
  padding: 10px;

  min-width: 320px;
  min-height: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DroppableContainer = styled.div<DroppableProps>`
  font-weight: bold;
`;
