import * as React from 'react';
import * as st from './DroppableAreaStyled';

import Item from './Item/Item';

import { Draggable } from 'react-beautiful-dnd';

import { TodoItem } from '../../TodoInterfaces';

const DroppableArea: React.FC<any> = ({ ...props }) => {
  if (props.items.lentgh === 0) {
    return <div></div>;
  }
  return (
    <st.DroppableAreaContainer ref={props.provided.innerRef} type={props.type}>
      {props.items.map((item: TodoItem, index: number) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <Item
              item={item}
              innerRef={provided.innerRef}
              provided={provided}
              type={props.type}
            />
          )}
        </Draggable>
      ))}
      {props.provided.placeholder}
    </st.DroppableAreaContainer>
  );
};

export default DroppableArea;
