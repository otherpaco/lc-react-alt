import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

const TodoFilters = () => {
  const { setFilter } = useContext(TodosContext);

  const active = 'filter-button-active';

  const handleClick = (event, filter) => {
    // remove active status
    document.querySelector(`.${active}`).classList.remove(active);
    // set active status
    event.target.classList.add(active);
    setFilter(filter);
  };

  return (
    <>
      <button
        className={`button filter-button ${active}`}
        onClick={(e) => handleClick(e, 'all')}
      >
        All
      </button>
      <button
        className="button filter-button"
        onClick={(e) => handleClick(e, 'active')}
      >
        Active
      </button>
      <button
        className="button filter-button"
        onClick={(e) => handleClick(e, 'completed')}
      >
        Completed
      </button>
    </>
  );
};

export { TodoFilters };
