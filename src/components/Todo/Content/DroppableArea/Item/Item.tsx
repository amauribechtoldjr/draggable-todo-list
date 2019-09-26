import * as React from 'react';
import * as st from './ItemStyled';

import { FaEdit, FaTrash } from 'react-icons/fa';
import Input from '../../../../UI/Input/Input';

import { TodoContext } from '../../../../../store/context/Todo/TodoContext';
import { actions } from '../../../../../store/actions/Todo/TodoActions';

const Item: React.FC<any> = ({ ...props }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editText, setEditText] = React.useState(props.item.content);

  const todoContext = React.useContext(TodoContext);

  const removeItem = (id: string, type: string) => {
    const isToRemove = confirm('Tem certeza que deseja excluir o item?');
    if (isToRemove) {
      todoContext.todoDispatch({
        type: actions.REMOVE_ITEM,
        payload: { id, type },
      });
    }
  };

  const _onPressEnter = (text: string) => {
    if (text === '') {
      removeItem(props.item.id, props.type);
      return;
    }

    todoContext.todoDispatch({
      type: actions.EDIT_ITEM,
      payload: { id: props.item.id, content: text },
    });

    setEditMode(false);
  };

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  return (
    <st.ItemContainer
      type={props.type}
      id={props.item.id}
      ref={props.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <st.ContentItemContainer>
        {editMode ? (
          <Input
            value={editText}
            pressEnter={_onPressEnter}
            resetText={false}
            onChange={_onChange}
            autoFocus
          />
        ) : (
          props.item.content
        )}
      </st.ContentItemContainer>
      <st.OptionsContainer>
        <st.IconContainer>
          <FaEdit size={16} onClick={() => setEditMode(!editMode)} />
        </st.IconContainer>
        <st.IconContainer>
          <FaTrash
            size={16}
            onClick={() => removeItem(props.item.id, props.type)}
          />
        </st.IconContainer>
      </st.OptionsContainer>
    </st.ItemContainer>
  );
};

export default Item;
