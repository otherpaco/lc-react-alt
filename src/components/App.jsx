import '../reset.css';
import '../App.css';
import { useEffect, useRef } from 'react';
import { NoTodos } from './NoTodos';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoFrom';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
  /**
   * HOOKS
   */
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage('name', '');
  const [todos, setTodos] = useLocalStorage('todos', []);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     isComplete: false,
  //     isEditing: false,
  //     title: 'Finish React Series',
  //   },
  //   {
  //     id: 2,
  //     isComplete: true,
  //     isEditing: false,
  //     title: 'Go Grocery',
  //   },
  //   {
  //     id: 3,
  //     isComplete: false,
  //     isEditing: false,
  //     title: 'Take over world',
  //   },
  // ]);

  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

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

  useEffect(() => {
    // console.log('use effect runing');
    nameInputEl.current.focus();

    // setName(JSON.parse(localStorage.getItem('name')) ?? '');

    return () => {
      // console.log('cleaning up');
    };
  }, []);

  const handleNameInput = (e) => {
    setName(e.target.value);
    // localStorage.setItem('name', JSON.stringify(e.target.value));
  };

  /**
   * JSX
   */
  return (
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
