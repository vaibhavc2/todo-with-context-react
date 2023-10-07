import { Dispatch, SetStateAction } from "react";
import { TodoType } from ".";

export interface TodoObjectType {
  todos: Array<TodoType>;
  isDeleted: boolean;
  setIsDeleted: Dispatch<SetStateAction<boolean>>;
  deleteCompletedTodos: () => void;
  undoDeletedTodo: () => void;
  addTodo: (todoMessage: string) => void;
  updateTodo: (id: string, todoMessage: string) => void;
  deleteTodo: (id: string) => void;
  toggleCompletion: (id: string) => void;
}
