import * as React from 'react';
import { ContentItems } from '../../../components/Todo/TodoInterfaces';

interface ContextProps {
  state: ContentItems;
  todoDispatch: any;
}

export const TodoContext = React.createContext<Partial<ContextProps>>({});
