import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

const CheckAll = () => {
  const { todos, setTodos } = useContext(TodosContext);

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
