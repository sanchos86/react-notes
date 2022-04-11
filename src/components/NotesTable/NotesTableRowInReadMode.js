import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NotesTableRowInReadMode = ({
  todo,
  index,
  toggleTodo,
  deleteTodo,
  toggleTableRowToUpdateMode,
}) => (
  <Fragment>
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
    <td>{todo.text}</td>
    <td>{todo.category}</td>
    <td>
      <Button
        size={'sm'}
        className={'me-2'}
        onClick={() => toggleTableRowToUpdateMode(todo)}
      >
        Edit
      </Button>
      <Button
        variant={'danger'}
        size={'sm'}
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </td>
  </Fragment>
);

export default NotesTableRowInReadMode;
