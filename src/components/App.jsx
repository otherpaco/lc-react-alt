import '../reset.css';
import '../App.css';
import { useState } from 'react';
import { NoTodos } from './NoTodos';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoFrom';

function App() {
  /**
   * STATES
   */
  const [todos, setTodos] = useState([
    {
      id: 1,
      isComplete: false,
      isEditing: false,
      title: 'Finish React Series',
    },
    {
      id: 2,
      isComplete: true,
      isEditing: false,
      title: 'Go Grocery',
    },
    {
      id: 3,
      isComplete: false,
      isEditing: false,
      title: 'Take over world',
    },
  ]);

  const [idForTodo, setIdForTodo] = useState(4);

  /**
   * METHODS
   */
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: idForTodo,
        isComplete: false,
        isEditing: false,
        title: title.trim(),
      },
    ]);

    setIdForTodo((prevId) => prevId + 1);
  };

  /**
   * JSX
   */
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          <TodoList todos={todos} setTodos={setTodos} />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
