import EmptyTableRow from './EmptyTableRow';
import NotesTableRow from './NotesTableRow';

const NotesTableBody = ({
  notes,
  deleteNote,
  updateNote,
  toggleNoteCompletedState,
}) => {
  let notesTableBodyContent = <EmptyTableRow colSpan={6} />;

  if (notes.length > 0) {
    notesTableBodyContent = notes.map((note, index) => (
      <NotesTableRow
        key={note.id}
        index={index}
        note={note}
        updateNote={updateNote}
        deleteNote={deleteNote}
        toggleNoteCompletedState={toggleNoteCompletedState}
      />
    ))
  }

  return <tbody>{notesTableBodyContent}</tbody>;
};

export default NotesTableBody;
