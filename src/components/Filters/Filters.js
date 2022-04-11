import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import filters from '../../constants/filters';

function Filters({ activeFilter, toggleActiveFilter, todos }) {
  const allTodosCount = todos.length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;
  const inProgressTodosCount = allTodosCount - completedTodosCount;

  return (
    <ButtonGroup aria-label="Todo filters">
      <Button
        active={activeFilter === filters.ALL}
        onClick={() => toggleActiveFilter(filters.ALL)}
      >
        All | {allTodosCount}
      </Button>
      <Button
        active={activeFilter === filters.COMPLETED}
        onClick={() => toggleActiveFilter(filters.COMPLETED)}
      >
        Completed | {completedTodosCount}
      </Button>
      <Button
        active={activeFilter === filters.IN_PROGRESS}
        onClick={() => toggleActiveFilter(filters.IN_PROGRESS)}
      >
        In progress | {inProgressTodosCount}
      </Button>
    </ButtonGroup>
  );
}

export default Filters;
