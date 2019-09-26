import * as React from 'react';
import * as st from './HeaderStyled';

import Input from '../../UI/Input/Input';

import { actions } from '../../../store/actions/Todo/TodoActions';
import { TodoContext } from '../../../store/context/Todo/TodoContext';

const Header: React.FC<any> = ({ height = '40px', width = '30vw' }) => {
  const [itemText, setItemText] = React.useState('');
  const todoContext = React.useContext(TodoContext);

  const addTodo = (text: string) => {
    if (text !== '') {
      todoContext.todoDispatch({
        type: actions.ADD_TODO,
        payload: text,
      });
      setItemText('');
    }
  };

  const _addClickButton = () => {
    addTodo(itemText);
    setItemText('');
  };

  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemText(event.target.value);
  };

  return (
    <st.HeaderContainer>
      <st.HeaderInputContainer height={height} width={width}>
        <Input
          width="100%"
          height={height}
          placeholder="Adicione um item!"
          centralized
          value={itemText}
          onChange={_onChange}
          pressEnter={addTodo}
        />
      </st.HeaderInputContainer>
      <st.buttonContaier>
        <st.ButtonStyled height={height} onClick={_addClickButton}>
          Adicionar
        </st.ButtonStyled>
      </st.buttonContaier>
    </st.HeaderContainer>
  );
};

export default Header;
