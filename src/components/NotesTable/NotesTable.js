import Table from 'react-bootstrap/Table';
import NotesTableBody from '@/components/NotesTable/NotesTableBody';

const NotesTable = ({
  notes,
  deleteNote,
  updateNote,
  toggleNoteCompletedState,
}) => {
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
      <NotesTableBody
        notes={notes}
        deleteNote={deleteNote}
        updateNote={updateNote}
        toggleNoteCompletedState={toggleNoteCompletedState}
      />
    </Table>
  );
};

export default NotesTable;
