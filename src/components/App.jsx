import '../reset.css';
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import { NoTodos } from './NoTodos';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoFrom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodosContext } from '../context/TodosContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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
          <CSSTransition
            in={!!name}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <p className="name-label">Hello, {name}</p>
          </CSSTransition>
        </div>
        <h2>Todo App</h2>
        <TodoForm />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            {todos.length > 0 ? <TodoList /> : <NoTodos />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
