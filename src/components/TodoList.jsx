import { CheckAll } from './CheckAll';
import { TodoFilters } from './TodoFilters';
import { TodoClearCompleted } from './TodoClearCompleted';
import { TodoItemsRemaining } from './TodoItemsRemaining';
import { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
  /**
   * STATES
   */
  const [filter, setFilter] = useState('all');

  /**
   * Filters the list of Todos
   * @param {string} filter - Type of filter
   * @returns {Array} Aray of Todos
   */
  const todosFiltered = (filter) => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.isComplete);
      case 'completed':
        return todos.filter((todo) => todo.isComplete);
      default:
        return todos;
    }
  };

  const toggleIsComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleIsEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length !== 0) {
          todo.title = event.target.value.trim();
        }
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteTodo = (idToDelete) => {
    setTodos([...todos].filter((todo) => todo.id !== idToDelete));
  };

  return (
    <>
      <ul className="todo-list">
        {todosFiltered(filter).map((todo, index) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => toggleIsComplete(todo.id)}
                checked={todo.isComplete}
              />
              {todo.isEditing ? (
                <input
                  autoFocus
                  className="todo-item-input"
                  onBlur={(e) => updateTodo(e, todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      updateTodo(e, todo.id);
                    } else if (e.key === 'Escape') {
                      toggleIsEditing(todo.id);
                    }
                  }}
                  type="text"
                  defaultValue={todo.title}
                />
              ) : (
                <span
                  className={`todo-item-label ${
                    todo.isComplete ? 'line-through' : ''
                  }`}
                  onDoubleClick={() => toggleIsEditing(todo.id)}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="check-all-container">
        <div>
          <CheckAll todos={todos} setTodos={setTodos} />
        </div>
        <TodoItemsRemaining todos={todos} />
      </div>

      <div className="other-buttons-container">
        <div>
          <TodoFilters setFilter={setFilter} />
        </div>
        <div>
          <TodoClearCompleted todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};

export { TodoList };