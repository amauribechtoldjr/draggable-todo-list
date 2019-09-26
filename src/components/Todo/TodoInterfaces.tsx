export interface TodoItem {
  id: string;
  content: string;
}

export type DraggableItems = TodoItem[];

export type ContentItems = {
  todos: DraggableItems;
  done: DraggableItems;
};

export interface DroppableContainerProps {
  items: DraggableItems;
  droppableID: string;
}
