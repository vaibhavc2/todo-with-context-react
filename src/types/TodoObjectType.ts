import { TodoType } from ".";

export interface TodoObjectType {
  todos: Array<TodoType>;
  addTodo: (todoMessage: string) => void;
  updateTodo: (id: string, todoMessage: string) => void;
  deleteTodo: (id: string) => void;
  toggleCompletion: (id: string) => void;
}
