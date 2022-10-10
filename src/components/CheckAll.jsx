const CheckAll = ({ todos, setTodos }) => {
  const completeAll = () => {
    setTodos(
      todos.map((todo) => {
        todo.isComplete = true;
        return todo;
      })
    );
  };
  return (
    <div className="button" onClick={() => completeAll()}>
      Check All
    </div>
  );
};

export { CheckAll };
