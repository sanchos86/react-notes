import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import NotesTableBodyContent from './NotesTableBodyContent';
import categories from '../../constants/categories';

const NotesTable = (props) => {
  const [editNoteForm, setEditNoteForm] = useState({
    id: null,
    text: '',
    category: categories.default.value,
  });

  const toggleTableRowToUpdateMode = ({ id, text, category }) => {
    setEditNoteForm({
      id,
      text,
      category,
    });
  }

  const toggleTableRowToReadMode = () => {
    setEditNoteForm({
      id: null,
      category: categories.default.value,
      text: '',
    });
  }

  const updateNote = () => {
    props.updateNote(editNoteForm);
    toggleTableRowToReadMode();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditNoteForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const { notes, toggleNoteCompletedState, deleteNote } = props;

  return (
    <Table bordered>
      <thead>
      <tr>
        <th>#</th>
        <th>Completed</th>
        <th>Text</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <NotesTableBodyContent
        notes={notes}
        toggleNoteCompletedState={toggleNoteCompletedState}
        deleteNote={deleteNote}
        toggleTableRowToUpdateMode={toggleTableRowToUpdateMode}
        toggleTableRowToReadMode={toggleTableRowToReadMode}
        updateNote={updateNote}
        editNoteForm={editNoteForm}
        handleChange={handleChange}
      />
      </tbody>
    </Table>
  );
};

export default NotesTable;
