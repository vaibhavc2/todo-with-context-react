import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";
import { useTodo } from "../../context";

const TodoPage = () => {
  const { todos } = useTodo();
  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="mx-auto w-full max-w-2xl rounded-lg px-4 py-3 text-gray-200 shadow-md">
        <h1 className="mb-8 mt-2 text-center text-2xl font-bold">
          Manage Your Todos
        </h1>

        <div className="mb-4">
          <TodoForm />
        </div>

        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              id={todo.id}
              className="w-full backdrop:blur-2xl"
            >
              {<TodoItem todo={todo} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
