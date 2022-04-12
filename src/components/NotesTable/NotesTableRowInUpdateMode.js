import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CategoriesOptions from '../AddNoteForm/CategoriesOptions';

const NotesTableRowInUpdateMode = ({
  index,
  note,
  handleChange,
  toggleNoteCompletedState,
  updateNote,
  editNoteForm,
  toggleTableRowToReadMode,
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
    <td>
      <Form.Control
        name={'text'}
        value={editNoteForm.text}
        onInput={(e) => handleChange(e)}
      />
    </td>
    <td>
      <Form.Select
        name={'category'}
        value={editNoteForm.category}
        onChange={(e) => handleChange(e)}
      >
        <CategoriesOptions/>
      </Form.Select>
    </td>
    <td>
      <Button
        variant={'secondary'}
        size={'sm'}
        className={'me-2'}
        onClick={toggleTableRowToReadMode}
      >
        Cancel
      </Button>
      <Button
        variant={'success'}
        size={'sm'}
        onClick={updateNote}
      >
        Save
      </Button>
    </td>
  </Fragment>
);

export default NotesTableRowInUpdateMode;
