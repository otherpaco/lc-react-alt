import '../reset.css';
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import { NoTodos } from './NoTodos';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoFrom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodosContext } from '../context/TodosContext';

function App() {
  /**
   * HOOKS
   */
  const nameInputEl = useRef(null);
  const [filter, setFilter] = useState('all');
  const [name, setName] = useLocalStorage('name', '');
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

  /**
   * METHODS
   */

  useEffect(() => {
    nameInputEl.current.focus();

    return () => {
      // console.log('cleaning up');
    };
  }, []);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  /**
   * JSX
   */
  return (
    <TodosContext.Provider
      value={{ filter, setFilter, idForTodo, setIdForTodo, todos, setTodos }}
    >
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form action="#">
              <input
                type="text"
                ref={nameInputEl}
                className="todo-input"
                placeholder="What is your name"
                value={name}
                onChange={handleNameInput}
              />
            </form>
            {/* onyl show when name is set */}
            {name && <p className="name-label">Hello, {name}</p>}
          </div>
          <h2>Todo App</h2>
          <TodoForm />
          {todos.length > 0 ? <TodoList /> : <NoTodos />}
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
