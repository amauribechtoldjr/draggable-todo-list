import {
  TodoItem,
  ContentItems,
  DraggableItems,
} from '../../../components/Todo/TodoInterfaces';

import { DraggableLocation } from 'react-beautiful-dnd';

export const actions = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REODER: 'REORDER',
  MOVE: 'MOVE',
  EDIT_ITEM: 'EDIT_ITEM',
};

export const addTodo = (content: string, state: ContentItems) => {
  const newTodo: TodoItem = {
    id:
      Math.floor(Date.now() / 1000).toString() +
      `${state.todos.length + state.done.length + 1}`,
    content,
  };

  return { ...state, todos: [...state.todos, newTodo] };
};

export const removeItem = (
  payload: { id: string; type: string },
  state: ContentItems
) => {
  let arrItems: ContentItems = { todos: state.todos, done: state.done };

  if (state.todos.findIndex(item => item.id == payload.id) > -1) {
    arrItems.todos = arrItems.todos.filter(item => item.id !== payload.id);
  }
  if (state.done.findIndex(item => item.id == payload.id) > -1) {
    arrItems.done = arrItems.done.filter(item => item.id !== payload.id);
  }

  return { ...state, todos: arrItems.todos, done: arrItems.done };
};

export const editItem = (
  payload: { id: string; content: string },
  state: ContentItems
) => {
  let arrItems: ContentItems = { todos: state.todos, done: state.done };

  if (state.todos.findIndex(item => item.id == payload.id) > -1) {
    arrItems.todos = arrItems.todos.map(item => {
      if (item.id == payload.id) {
        item.content = payload.content;
      }

      return item;
    });
  }
  if (state.done.findIndex(item => item.id == payload.id) > -1) {
    arrItems.done = arrItems.done.map(item => {
      if (item.id == payload.id) {
        item.content = payload.content;
      }

      return item;
    });
  }

  return { ...state, todos: arrItems.todos, done: arrItems.done };
};

export const reorderItems = (
  payload: {
    droppableId: string;
    sourceIndex: number;
    destinationIndex: number;
  },
  state: ContentItems
) => {
  const orderedItems = getListReordered(
    getList(payload.droppableId, state),
    payload.sourceIndex,
    payload.destinationIndex
  );
  let newItems: ContentItems = { todos: orderedItems, done: state.done };

  if (payload.droppableId === 'droppable2') {
    newItems = { done: orderedItems, todos: state.todos };
  }

  return { ...state, done: newItems.done, todos: newItems.todos };
};

export const moveItem = (
  payload: {
    sourceId: string;
    destinationId: string;
    droppableSource: DraggableLocation;
    droppableDestination: DraggableLocation;
  },
  state: ContentItems
) => {
  const sourceClone: DraggableItems = Array.from(
    getList(payload.sourceId, state)
  );
  const destClone: DraggableItems = Array.from(
    getList(payload.destinationId, state)
  );

  const [removed] = sourceClone.splice(payload.droppableSource.index, 1);
  destClone.splice(payload.droppableDestination.index, 0, removed);
  let result: ContentItems = { todos: [], done: [] };

  if (payload.droppableDestination.droppableId === id2List.done) {
    result = { done: destClone, todos: sourceClone };
  }

  if (payload.droppableDestination.droppableId === id2List.todo) {
    result = { todos: destClone, done: sourceClone };
  }

  return { ...state, todos: result.todos, done: result.done };
};

const id2List: { todo: string; done: string } = {
  todo: 'droppable1',
  done: 'droppable2',
};

const getList = (id: string, state: ContentItems) => {
  if (id === id2List.todo) {
    return state.todos;
  }
  if (id === id2List.done) {
    return state.done;
  }
};

const getListReordered: (
  list: TodoItem[],
  startIndex: number,
  endIndex: number
) => DraggableItems = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
