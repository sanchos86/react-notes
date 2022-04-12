import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import Filters from './components/Filters/Filters';
import NotesTable from './components/NotesTable/NotesTable';
import SearchForm from './components/SearchForm/SearchForm';

import filters from './constants/filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: filters.default,
      search: '',
      notes: [],
    };
  }

  toggleActiveFilter = (activeFilter) => {
    this.setState({
      activeFilter,
    });
  }

  toggleNoteCompletedState = (noteId) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          completed: !note.completed,
        };
      }
      return note;
    });
    this.setState({
      notes,
    });
  }

  searchNotes = (event) => {
    let search = event.target.value;
    this.setState({
      search,
    });
  }

  addNote = ({ text, category }) => {
    const id = uuidv4();
    const note = {
      completed: false,
      category,
      text,
      id,
    };
    const notes = [...this.state.notes, note];
    this.setState({
      notes,
    })
  }

  deleteNote = (noteId) => {
    const notes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({
      notes,
    })
  }

  updateNote = ({ id, text, category }) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          category,
          text,
          id,
        };
      }
      return note;
    });
    this.setState({
      notes,
    })
  }

  filterNotes = () => {
    const { state: { notes, activeFilter, search } } = this;

    return notes.filter((note) => {
      if (activeFilter === filters.ALL) {
        return note.text.includes(search);
      }
      if (activeFilter === filters.COMPLETED) {
        return note.completed && note.text.includes(search);
      }
      if (activeFilter === filters.IN_PROGRESS) {
        return !note.completed && note.text.includes(search);
      }
      return note;
    });
  }

  render() {
    const { state: { notes, activeFilter } } = this;
    const {
      toggleActiveFilter,
      searchNotes,
      toggleNoteCompletedState,
      addNote,
      deleteNote,
      updateNote,
      filterNotes,
    } = this;

    const notesFiltered = filterNotes();

    return (
      <Container className={'pt-4'}>
        <Row>
          <Col>
            <AddNoteForm
              addNote={addNote}
            />
          </Col>
        </Row>
        <hr />
        <Row className={'mb-4'}>
          <Col xs={4}>
            <SearchForm
              searchNotes={searchNotes}
            />
          </Col>
          <Col className={'text-end'} xs={8}>
            <Filters
              notes={notes}
              activeFilter={activeFilter}
              toggleActiveFilter={toggleActiveFilter}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NotesTable
              notes={notesFiltered}
              toggleNoteCompletedState={toggleNoteCompletedState}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
