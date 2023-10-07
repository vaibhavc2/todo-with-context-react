import { useCallback, useState } from "react";
import { useTodo } from "../context";
import { TodoType } from "../types";

function TodoItem({ todo }: { todo: TodoType }) {
  const { deleteTodo, updateTodo, toggleCompletion } = useTodo();
  const [todoMessage, setTodoMessage] = useState(todo.todoMessage);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const editTodo = useCallback(() => {
    updateTodo(todo.id, todoMessage);
    setIsTodoEditable(false);
  }, [todoMessage, setTodoMessage, setIsTodoEditable, isTodoEditable]);

  return (
    <div
      className={`flex gap-x-3 rounded-lg border border-black/10 px-3 py-1.5 text-black accent-blue-700 shadow-sm shadow-white/50 duration-300 ${
        todo.isCompleted
          ? "bg-[#c9c9c8] text-[#303030] opacity-40"
          : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={() => toggleCompletion(todo.id)}
      />
      <input
        type="text"
        className={`w-full rounded-lg border bg-transparent outline-none ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100 disabled:opacity-50"
        type="submit"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
