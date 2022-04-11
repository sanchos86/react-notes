import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CategoriesOptions from '../AddNoteForm/CategoriesOptions';
import EmptyTableRow from './EmptyTableRow';
import NotesTableRowInReadMode from './NotesTableRowInReadMode';
import categories from '../../constants/categories';

function TbodyContent({
  todos,
  toggleTodo,
  deleteTodo,
  toggleTableRowToUpdateMode,
  form,
  saveEdit,
  cancelEdit,
  handleChangeLocally,
}) {
  if (todos.length === 0) {
    return <EmptyTableRow colSpan={6} />;
  }
  return (
    <Fragment>
      {
        todos.map((todo, index) => (
          <tr key={todo.id}>
            { todo.id === form.id ?
              <>
                <td>{index + 1}</td>
                <td>
                  <Form.Check
                    checked={todo.completed}
                    type={'checkbox'}
                    label={todo.completed ? 'Restore' : 'Complete'}
                    id={`notes-table-${todo.id}`}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </td>
                <td>
                  <Form.Control name={'text'} value={form.text} onInput={(e) => handleChangeLocally(e)}/>
                </td>
                <td>
                  <Form.Select name={'category'} value={form.category} onChange={(e) => handleChangeLocally(e)}>
                    <CategoriesOptions />
                  </Form.Select>
                </td>
                <td>
                  <Button variant={'secondary'} size={'sm'} className={'me-2'} onClick={() => cancelEdit(todo)}>Cancel</Button>
                  <Button variant={'success'} size={'sm'} onClick={() => saveEdit(todo.id)}>Save</Button>
                </td>
              </> :
              <NotesTableRowInReadMode
                todo={todo}
                index={index}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                toggleTableRowToUpdateMode={toggleTableRowToUpdateMode}
              />
            }
          </tr>
        ))
      }
    </Fragment>
  );
}

class NotesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: null,
        category: categories[0].value,
        text: '',
      }
    };
    this.toggleTableRowToUpdateMode = this.toggleTableRowToUpdateMode.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.handleChangeLocally = this.handleChangeLocally.bind(this);
  }

  toggleTableRowToUpdateMode({ id, text, category }) {
    this.setState({
      form: {
        id,
        text,
        category,
      }
    })
  }

  cancelEdit() {
    this.setState({
      form: {
        id: null,
        category: categories[0].value,
        text: '',
      }
    })
  }

  saveEdit() {
    this.props.updateTodo(this.state.form);
    this.cancelEdit();
  }

  handleChangeLocally(e) {
    const { name, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    })
  }

  render() {
    const { props: { todos, toggleTodo, deleteTodo } } = this;
    const { state: { form } } = this;
    const {
      toggleTableRowToUpdateMode,
      cancelEdit,
      saveEdit,
      handleChangeLocally,
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
        <TbodyContent
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          toggleTableRowToUpdateMode={toggleTableRowToUpdateMode}
          cancelEdit={cancelEdit}
          saveEdit={saveEdit}
          form={form}
          handleChangeLocally={handleChangeLocally}
        />
        </tbody>
      </Table>
    );
  }
}

export default NotesTable;
