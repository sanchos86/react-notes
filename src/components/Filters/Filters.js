import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import filters from '@/constants/filters';

function Filters({ activeFilter, toggleActiveFilter, notes }) {
  const allNotesCount = notes.length;
  const completedNotesCount = notes.filter((note) => note.completed).length;
  const inProgressNotesCount = allNotesCount - completedNotesCount;

  return (
    <ButtonGroup aria-label="Notes filter">
      <Button
        active={activeFilter === filters.ALL}
        onClick={() => toggleActiveFilter(filters.ALL)}
      >
        All | {allNotesCount}
      </Button>
      <Button
        active={activeFilter === filters.COMPLETED}
        onClick={() => toggleActiveFilter(filters.COMPLETED)}
      >
        Completed | {completedNotesCount}
      </Button>
      <Button
        active={activeFilter === filters.IN_PROGRESS}
        onClick={() => toggleActiveFilter(filters.IN_PROGRESS)}
      >
        In progress | {inProgressNotesCount}
      </Button>
    </ButtonGroup>
  );
}

export default Filters;
