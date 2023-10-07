import { TodoType } from ".";

export interface TodoObjectType {
  todos: Array<TodoType>;
  addTodo: (todo: TodoType) => void;
  updateTodo: (id: string, todo: TodoType) => void;
  deleteTodo: (id: string, todo: TodoType) => void;
  toggleCompletion: (id: string) => void;
}
