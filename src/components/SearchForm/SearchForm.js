import Form from 'react-bootstrap/Form';

function SearchForm({ searchNotes }) {
  return (
    <Form.Control
      placeholder={'Find notes - enter at least 2 characters'}
      onChange={searchNotes}
    />
  );
}

export default SearchForm;
