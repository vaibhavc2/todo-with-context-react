import { useEffect } from "react";
import { useTodo } from "../context";

const UndoDelete = () => {
  const { undoDeletedTodo, isDeleted, setIsDeleted, deleteCompletedTodos } =
    useTodo();

  const changeDeletionStatus = () => setIsDeleted((prev) => !prev);

  let timerId: number;
  useEffect(() => {
    const timeoutFunction = async () => {
      if (isDeleted) timerId = setTimeout(changeDeletionStatus, 4500);
    };
    timeoutFunction();
  }, [isDeleted === true]);

  return (
    <>
      <div
        className={`sticky bottom-0 block p-3 backdrop-blur-xl ${
          isDeleted ? "h-36" : "h-20"
        }`}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center ">
          <button
            type="button"
            className={`my-1 rounded-lg border-2 border-red-500 bg-gray-800 px-4 py-2 font-bold text-red-700 hover:bg-gray-900 ${
              isDeleted ? "opacity-50" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (timerId !== null) clearTimeout(timerId);
              deleteCompletedTodos();
            }}
            disabled={isDeleted}
          >
            Delete Completed Todos
          </button>
        </div>
      </div>

      <div
        className={`sticky bottom-0 animate-pulse bg-red-950 py-3  text-center lg:px-4 ${
          isDeleted ? "visible" : "invisible"
        }`}
      >
        <div className="mx-auto flex max-w-full justify-around">
          <div
            className="flex items-center rounded-full bg-red-900 p-2 leading-none text-indigo-100 backdrop-blur-3xl  lg:inline-flex"
            role="alert"
          >
            <span className="mr-3 flex rounded-full bg-red-500 px-2 py-1 text-base font-bold uppercase">
              !!!
            </span>
            <span className="mr-2 flex-auto text-left font-semibold">
              Deletion Performed
            </span>
            <svg
              className="h-4 w-4 fill-current opacity-75"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
          <button
            type="button"
            className="flex items-center rounded-full bg-green-500 p-2 leading-none text-indigo-100 lg:inline-flex"
            onClick={(e) => {
              e.preventDefault();
              if (timerId !== null) clearTimeout(timerId);
              undoDeletedTodo();
            }}
          >
            <span className="pointer flex rounded-full bg-green-900 px-3 py-2 text-xs font-bold uppercase">
              UNDO
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UndoDelete;
