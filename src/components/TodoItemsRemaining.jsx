import { useMemo } from 'react';

const TodoItemsRemaining = ({ todos }) => {
  const calcRemainingTodos = () => {
    // console.log('remaining Todos fct called');
    return todos.filter((todo) => !todo.isComplete).length;
  };

  const remainingTodos = useMemo(calcRemainingTodos, [todos]);

  return <span>{remainingTodos} items remaining</span>;
};

export { TodoItemsRemaining };
