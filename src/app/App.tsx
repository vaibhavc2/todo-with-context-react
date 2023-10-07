import { useCallback, useState } from "react";
import { TodoType } from "../types";
import { TodoProvider } from "../context";
import { v4 as uuidv4 } from "uuid";
import { TodoPage } from "./pages";

const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const addTodo = useCallback(
    (todoMessage: string) => {
      const latestTodo: TodoType = {
        id: uuidv4(),
        todoMessage,
        isCompleted: false
      };

      setTodos((prev) => {
        return [...prev, latestTodo];
      });
    },
    [todos, setTodos]
  );

  const updateTodo = useCallback(
    (id: string, todoMessage: string) => {
      setTodos((prev) => {
        const todo = prev.find((todo) => todo.id === id);
        if (todo?.todoMessage) todo.todoMessage = todoMessage;
        return [...prev];
      });
    },
    [todos, setTodos]
  );

  const deleteTodo = useCallback(
    (id: string) => {
      // setTodos((prev) => {
      // const todoIndex = prev.findIndex((todo) => todo.id === id);
      // prev = prev.splice(todoIndex, 1);
      // return [...prev];
      // });

      // better method:
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [todos, setTodos]
  );

  const toggleCompletion = useCallback(
    (id: string) => {
      // setTodos((prev) => {
      //   const todo = prev.find((todo) => todo.id === id);
      //   if (todo?.isCompleted) todo.isCompleted = !todo.isCompleted;
      //   return [...prev];
      // });

      // another way:
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos, setTodos]
  );

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompletion }}
    >
      <TodoPage />
    </TodoProvider>
  );
};

export default App;
