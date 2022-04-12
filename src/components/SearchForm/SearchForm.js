import Form from 'react-bootstrap/Form';

function SearchForm({ searchNotes }) {
  return (
    <Form.Control
      placeholder={'Find notes - enter at least 2 characters'}
      onInput={(event) => searchNotes(event)}
    />
  );
}

export default SearchForm;
