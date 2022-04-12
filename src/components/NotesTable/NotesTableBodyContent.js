import React, { Fragment } from 'react';
import EmptyTableRow from './EmptyTableRow';
import NotesTableRowInReadMode from './NotesTableRowInReadMode';
import NotesTableRowInUpdateMode from './NotesTableRowInUpdateMode';

const NotesTableBodyContent = ({
  notes,
  toggleNoteCompletedState,
  deleteNote,
  toggleTableRowToUpdateMode,
  editNoteForm,
  updateNote,
  toggleTableRowToReadMode,
  handleChange,
}) => {
  if (notes.length === 0) {
    return <EmptyTableRow colSpan={6} />;
  }
  return (
    <Fragment>
      {
        notes.map((note, index) => (
          <tr key={note.id}>
            {note.id === editNoteForm.id ?
              <NotesTableRowInUpdateMode
                note={note}
                index={index}
                handleChange={handleChange}
                updateNote={updateNote}
                editNoteForm={editNoteForm}
                toggleTableRowToReadMode={toggleTableRowToReadMode}
                toggleNoteCompletedState={toggleNoteCompletedState}
              /> :
              <NotesTableRowInReadMode
                note={note}
                index={index}
                deleteNote={deleteNote}
                toggleNoteCompletedState={toggleNoteCompletedState}
                toggleTableRowToUpdateMode={toggleTableRowToUpdateMode}
              />
            }
          </tr>
        ))
      }
    </Fragment>
  );
};

export default NotesTableBodyContent;
