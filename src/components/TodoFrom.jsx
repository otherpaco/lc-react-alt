import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    addTodo(todoInput);
    setTodoInput('');
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
};
export { TodoForm };
