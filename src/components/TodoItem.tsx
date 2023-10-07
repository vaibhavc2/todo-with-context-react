// function TodoItem({ todo }) {
//   return (
//     <div
//       className={`flex gap-x-3 rounded-lg border border-black/10 px-3 py-1.5 text-black shadow-sm shadow-white/50  duration-300 ${
//         todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//       }`}
//     >
//       <input
//         type="checkbox"
//         className="cursor-pointer"
//         checked={todo.completed}
//         onChange={toggleCompleted}
//       />
//       <input
//         type="text"
//         className={`w-full rounded-lg border bg-transparent outline-none ${
//           isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//         } ${todo.completed ? "line-through" : ""}`}
//         value={todoMsg}
//         onChange={(e) => setTodoMsg(e.target.value)}
//         readOnly={!isTodoEditable}
//       />
//       {/* Edit, Save Button */}
//       <button
//         className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100 disabled:opacity-50"
//         onClick={() => {
//           if (todo.completed) return;

//           if (isTodoEditable) {
//             editTodo();
//           } else setIsTodoEditable((prev) => !prev);
//         }}
//         disabled={todo.completed}
//       >
//         {isTodoEditable ? "📁" : "✏️"}
//       </button>
//       {/* Delete Todo Button */}
//       <button
//         className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100"
//         onClick={() => deleteTodo(todo.id)}
//       >
//         ❌
//       </button>
//     </div>
//   );
// }

// export default TodoItem;
