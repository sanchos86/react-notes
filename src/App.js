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
      todos: [],
    };
    this.toggleActiveFilter = this.toggleActiveFilter.bind(this);
    this.searchTodos = this.searchTodos.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  toggleActiveFilter(activeFilter) {
    this.setState({
      activeFilter,
    });
  }

  toggleTodo(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState({
      todos,
    });
  }

  searchTodos(event) {
    let search = event.target.value;
    this.setState({
      search,
    });
  }

  addTodo({ text, category }) {
    const id = uuidv4();
    const todo = {
      completed: false,
      category,
      text,
      id,
    };
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    })
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos,
    })
  }

  updateTodo(todo) {
    const todos = this.state.todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          ...todo,
        };
      }
      return item;
    });
    this.setState({
      todos,
    })
  }

  render() {
    const { state: { todos, activeFilter, search } } = this;
    const {
      toggleActiveFilter,
      searchTodos,
      toggleTodo,
      addTodo,
      deleteTodo,
      updateTodo,
    } = this;

    const todosFiltered = todos.filter(todo => {
      if (activeFilter === filters.ALL) {
        return todo.text.includes(search);
      }
      if (activeFilter === filters.COMPLETED) {
        return todo.completed && todo.text.includes(search);
      }
      if (activeFilter === filters.IN_PROGRESS) {
        return !todo.completed && todo.text.includes(search);
      }
      return todo;
    });

    return (
      <Container className={'pt-4'}>
        <Row>
          <Col>
            <AddNoteForm
              addTodo={addTodo}
            />
          </Col>
        </Row>
        <hr />
        <Row className={'mb-4'}>
          <Col xs={4}>
            <SearchForm
              searchTodos={searchTodos}
            />
          </Col>
          <Col className={'text-end'} xs={8}>
            <Filters
              todos={todos}
              activeFilter={activeFilter}
              toggleActiveFilter={toggleActiveFilter}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NotesTable
              todos={todosFiltered}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
