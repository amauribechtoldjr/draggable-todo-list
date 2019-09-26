import * as React from 'react';
import * as st from './TodoScreenStyled';

import Todo from '../../components/Todo/Todo';
import Header from '../../components/Todo/Header/Header';

import { TodoContext } from '../../store/context/Todo/TodoContext';
import reducer, {
  todoInitialState,
} from '../../store/reducers/Todo/TodoReducer';

const TodoScreen: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, todoInitialState);

  return (
    <TodoContext.Provider value={{ state: state, todoDispatch: dispatch }}>
      <st.TodoScreenContainer>
        <Header />
        <Todo />
      </st.TodoScreenContainer>
    </TodoContext.Provider>
  );
};

export default TodoScreen;
