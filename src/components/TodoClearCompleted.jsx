const TodoClearCompleted = ({ todos, setTodos }) => {
  const clearCompleted = () => {
    return setTodos([...todos].filter((todo) => !todo.isComplete));
  };
  return (
    <button className="button" onClick={() => clearCompleted()}>
      Clear completed
    </button>
  );
};

export { TodoClearCompleted };
