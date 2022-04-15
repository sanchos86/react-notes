import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import Filters from './components/Filters/Filters';
import NotesTable from './components/NotesTable/NotesTable';
import SearchForm from './components/SearchForm/SearchForm';
import filters from './constants/filters';

const NOTES = 'NOTES';

const App = () => {
  const [activeFilter, setActiveFilter] = useState(filters.default);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const localStorageNotes = window.localStorage.getItem(NOTES);
    if (localStorageNotes) {
      setNotes(JSON.parse(localStorageNotes));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(NOTES, JSON.stringify(notes));
  }, [notes]);

  const toggleActiveFilter = (activeFilter) => {
    setActiveFilter(activeFilter);
  }

  const toggleNoteCompletedState = (noteId) => {
    setNotes((prevState) => {
      return prevState.map((note) => {
        if (note.id === noteId) {
          return {
            ...note,
            completed: !note.completed,
          };
        }
        return note;
      });
    });
  }

  const searchNotes = (event) => {
    let search = event.target.value;
    setSearch(search);
  }

  const addNote = ({ text, category }) => {
    const id = uuidv4();
    const note = {
      completed: false,
      category,
      text,
      id,
    };
    setNotes((prevState) => {
      return [...prevState, note];
    });
  }

  const deleteNote = (noteId) => {
    setNotes((prevState) => {
      return prevState.filter((note) => note.id !== noteId);
    });
  }

  const updateNote = ({ id, text, category }) => {
    setNotes((prevState) => {
      return prevState.map((note) => {
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
    });
  }

  const filterNotes = () => {
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
};

export default App;
