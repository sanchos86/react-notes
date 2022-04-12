import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CategoriesOptions from './CategoriesOptions';
import categories from '../../constants/categories';

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        category: categories.default.value,
        text: '',
      }
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    const { state: { form } } = this;
    this.props.addNote(form);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      form: {
        category: categories.default.value,
        text: '',
      }
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const form = {
      ...this.state.form,
      [name]: value,
    };
    this.setState({
      form,
    });
  }

  render() {
    const { submitForm, handleChange } = this;
    const { state: { form } } = this;

    return (
      <Form onSubmit={(e) => submitForm(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name={'category'}
            value={form.category}
            onChange={(e) => handleChange(e)}
          >
            <CategoriesOptions />
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            name={'text'}
            value={form.text}
            placeholder="Enter note text"
            onInput={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className={'text-end'}>
          <Button type={'submit'}>Add note</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddNoteForm;
