import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CategoriesOptions from './CategoriesOptions';
import categories from '../../constants/categories';

const AddNoteForm = ({ addNote }) => {
  const [form, setForm] = useState({
    category: categories.default.value,
    text: '',
  });

  const resetForm = () => {
    setForm({
      category: categories.default.value,
      text: '',
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addNote(form);
    resetForm();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const { text, category } = form;

  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name={'category'}
          value={category}
          onChange={handleChange}
        >
          <CategoriesOptions />
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          name={'text'}
          value={text}
          placeholder="Enter note text"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className={'text-end'}>
        <Button type={'submit'}>Add note</Button>
      </Form.Group>
    </Form>
  );
};

export default AddNoteForm;
