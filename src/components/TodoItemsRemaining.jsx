const TodoItemsRemaining = ({ todos }) => {
  const remainingTodos = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  return <span>{remainingTodos()} items remaining</span>;
};

export { TodoItemsRemaining };
