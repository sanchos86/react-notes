import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NotesTableRowInReadMode = ({
  note,
  index,
  toggleNoteCompletedState,
  deleteNote,
  toggleTableRowToUpdateMode,
}) => (
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
        Edit
      </Button>
      <Button
        variant={'danger'}
        size={'sm'}
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </Button>
    </td>
  </Fragment>
);

export default NotesTableRowInReadMode;
