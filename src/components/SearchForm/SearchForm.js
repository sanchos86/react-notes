import Form from 'react-bootstrap/Form';

function SearchForm({ searchTodos }) {
  return (
    <Form.Control
      placeholder={'Find todos - enter at least 2 characters ...'}
      onInput={(event) => searchTodos(event)}
    />
  );
}

export default SearchForm;
