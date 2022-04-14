import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const NotesTableRowInReadMode = ({
  note,
  index,
  toggleNoteCompletedState,
  deleteNote,
  toggleTableRowToUpdateMode,
}) => {
  return (
    <Fragment>
      <td>{index + 1}</td>
      <td>
        <Form.Check
          checked={note.completed}
          type={'checkbox'}
          label={note.completed ? 'Restore' : 'Complete'}
          id={`notes-table-${note.id}`}
          onChange={() => toggleNoteCompletedState(note.id)}
        />
      </td>
      <td>{note.text}</td>
      <td>{note.category}</td>
      <td>
        <Button
          size={'sm'}
          className={'me-2'}
          onClick={() => toggleTableRowToUpdateMode(note)}
        >
          <FontAwesomeIcon icon={faPen} className={'me-1'} />Edit
        </Button>
        <Button
          variant={'danger'}
          size={'sm'}
          onClick={() => deleteNote(note.id)}
        >
          <FontAwesomeIcon icon={faTrash} className={'me-1'} />Delete
        </Button>
      </td>
    </Fragment>
  );
};

export default NotesTableRowInReadMode;
