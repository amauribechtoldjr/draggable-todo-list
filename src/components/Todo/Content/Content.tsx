import * as React from 'react';
import * as st from './ContentStyled';

import { TodoContext } from '../../../store/context/Todo/TodoContext';
import { actions } from '../../../store/actions/Todo/TodoActions';

import DroppableArea from './DroppableArea/DroppableArea';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Content: React.FC = () => {
  const todoContext = React.useContext(TodoContext);

  const onDragEnd: (result: any) => void = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      todoContext.todoDispatch({
        type: actions.REODER,
        payload: {
          droppableId: source.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        },
      });
    } else {
      todoContext.todoDispatch({
        type: actions.MOVE,
        payload: {
          sourceId: source.droppableId,
          destinationId: destination.droppableId,
          droppableSource: source,
          droppableDestination: destination,
        },
      });
    }
  };

  return (
    <st.ContentContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <st.DraggableContainer>
          <st.DraggableLabel>PENDENTES</st.DraggableLabel>
          <Droppable droppableId="droppable1">
            {(provided, snapshot) => (
              <DroppableArea
                items={
                  todoContext.state && todoContext.state.todos
                    ? todoContext.state.todos
                    : []
                }
                snapshot={snapshot}
                provided={provided}
                type="todo"
              />
            )}
          </Droppable>
        </st.DraggableContainer>
        <st.DraggableContainer>
          <st.DraggableLabel>REALIZADOS</st.DraggableLabel>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <DroppableArea
                items={
                  todoContext.state && todoContext.state.done
                    ? todoContext.state.done
                    : []
                }
                snapshot={snapshot}
                provided={provided}
                type="done"
              />
            )}
          </Droppable>
        </st.DraggableContainer>
      </DragDropContext>
    </st.ContentContainer>
  );
};

export default Content;
