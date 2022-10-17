import { useContext, useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';

const TodoItemsRemaining = () => {
  const { todos } = useContext(TodosContext);

  const calcRemainingTodos = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  const remainingTodos = useMemo(calcRemainingTodos, [todos]);

  return <span>{remainingTodos} items remaining</span>;
};

export { TodoItemsRemaining };
