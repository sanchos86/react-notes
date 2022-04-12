import React from 'react';
import Table from 'react-bootstrap/Table';
import NotesTableBodyContent from './NotesTableBodyContent';
import categories from '../../constants/categories';

class NotesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editNoteForm: {
        id: null,
        text: '',
        category: categories.default.value,
      }
    };
  }

  toggleTableRowToUpdateMode = ({ id, text, category }) => {
    this.setState({
      editNoteForm: {
        id,
        text,
        category,
      }
    })
  }

  toggleTableRowToReadMode = () => {
    this.setState({
      editNoteForm: {
        id: null,
        category: categories.default.value,
        text: '',
      }
    })
  }

  updateNote = () => {
    this.props.updateNote(this.state.editNoteForm);
    this.toggleTableRowToReadMode();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      editNoteForm: {
        ...this.state.editNoteForm,
        [name]: value,
      }
    })
  }

  render() {
    const { props: { notes, toggleNoteCompletedState, deleteNote } } = this;
    const { state: { editNoteForm } } = this;
    const {
      toggleTableRowToUpdateMode,
      toggleTableRowToReadMode,
      updateNote,
      handleChange,
    } = this;

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
  }
}

export default NotesTable;
