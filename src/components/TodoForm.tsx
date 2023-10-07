import { useEffect, useState } from "react";
import { useTodo } from "../context";

const initialInputValue: string = JSON.parse(
  localStorage.getItem("inp") as string
);

function TodoForm() {
  const { addTodo } = useTodo();
  const [todoMessage, setTodoMessage] = useState(initialInputValue);

  useEffect(() => {
    localStorage.setItem("inp", JSON.stringify(todoMessage));
  }, [todoMessage]);

  return (
    <form
      className="flex"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoMessage);
        setTodoMessage("");
      }}
    >
      <input
        type="text"
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        placeholder="Write Todo..."
        className="w-full rounded-l-lg border border-black/10 bg-white/20 px-3 py-1.5 outline-none duration-150"
      />
      <button
        type="submit"
        className="shrink-0 rounded-r-lg bg-green-600 px-3 py-1 text-white"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
