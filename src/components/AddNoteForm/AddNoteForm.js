import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import categories from '../../constants/categories';

function Options() {
  return (
    <>
      {
        categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))
      }
    </>
  );
}

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        category: categories[0].value,
        text: '',
      }
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { state: { form } } = this;
    this.props.addTodo(form);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      form: {
        category: categories[0].value,
        text: '',
      }
    });
  }

  handleChange(e) {
    const { name } = e.target;
    const form = {
      ...this.state.form,
      [name]: e.target.value,
    };
    this.setState({
      form,
    })
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
            <Options />
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            name={'text'}
            value={form.text}
            placeholder="Enter todo"
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
