const TodoPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="mx-auto w-full max-w-2xl rounded-lg px-4 py-3 text-gray-200 shadow-md">
        <h1 className="mb-8 mt-2 text-center text-2xl font-bold">
          Manage Your Todos
        </h1>
        <div className="mb-4">{/* Todo form goes here */}</div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
