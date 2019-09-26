import { ContentItems } from '../../../components/Todo/TodoInterfaces';
import * as todoActions from '../../actions/Todo/TodoActions';

export const todoInitialState: ContentItems = {
  todos: [],
  done: [],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case todoActions.actions.ADD_TODO:
      return todoActions.addTodo(action.payload, state);
    case todoActions.actions.EDIT_ITEM:
      return todoActions.editItem(action.payload, state);
    case todoActions.actions.REMOVE_ITEM:
      return todoActions.removeItem(action.payload, state);
    case todoActions.actions.MOVE:
      return todoActions.moveItem(action.payload, state);
    case todoActions.actions.REODER:
      return todoActions.reorderItems(action.payload, state);
    default:
      return state;
  }
};

export default reducer;
