import { useCallback, useEffect, useState } from "react";
import { TodoObjectType, TodoType } from "../types";
import { TodoProvider } from "../context";
import { v4 as uuidv4 } from "uuid";
import { TodoPage } from "./pages";
import UndoDelete from "../components/UndoDelete";

const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [deletedTodos, setDeletedTodos] = useState<Array<TodoType>>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const addTodo = useCallback(
    (todoMessage: string) => {
      const latestTodo: TodoType = {
        id: uuidv4(),
        todoMessage,
        isCompleted: false
      };
      setTodos((prev) => {
        return [latestTodo, ...prev];
      });
    },
    [todos, setTodos, uuidv4]
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
      setDeletedTodos(todos);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setIsDeleted(true);
    },
    [todos, setTodos, deletedTodos, setDeletedTodos]
  );

  const undoDeletedTodo = useCallback(() => {
    setTodos(deletedTodos);
    setDeletedTodos({} as Array<TodoType>);
    setIsDeleted(false);
  }, [setTodos, setDeletedTodos, setIsDeleted, deletedTodos]);

  const toggleCompletion = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos, setTodos]
  );

  const fetchTodosLocally = () => {
    const fetchedTodos: TodoObjectType = JSON.parse(
      localStorage.getItem("todos") as string
    );
    if (fetchedTodos && fetchedTodos.todos.length > 0)
      setTodos(fetchedTodos.todos as Array<TodoType>);
  };

  const setTodosLocally = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify({ todos: todos }));
  }, [todos, setTodos]);

  // only run once while the component is rendered
  useEffect(fetchTodosLocally, []);

  // run everytime todos array is changed
  useEffect(setTodosLocally, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        isDeleted,
        setIsDeleted,
        undoDeletedTodo,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompletion
      }}
    >
      <TodoPage />
      <UndoDelete />
    </TodoProvider>
  );
};

export default App;
