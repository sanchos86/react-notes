import { useState } from 'react';
import NotesTableRowInReadMode from '@/components/NotesTable/NotesTableRowInReadMode';
import NotesTableRowInUpdateMode from '@/components/NotesTable/NotesTableRowInUpdateMode';

const NotesTableRow = ({
  index,
  note,
  updateNote,
  deleteNote,
  toggleNoteCompletedState,
}) => {
  const [updateMode, setUpdateMode] = useState(false);

  if (updateMode) {
    return (
      <NotesTableRowInUpdateMode
        note={note}
        index={index}
        updateNote={updateNote}
        setUpdateMode={setUpdateMode}
        toggleNoteCompletedState={toggleNoteCompletedState}
      />
    );
  }

  return (
    <NotesTableRowInReadMode
      note={note}
      index={index}
      deleteNote={deleteNote}
      setUpdateMode={setUpdateMode}
      toggleNoteCompletedState={toggleNoteCompletedState}
    />
  );
};

export default NotesTableRow;
