import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CategoriesOptions from './CategoriesOptions';
import categories from '../../constants/categories';

const AddNoteForm = ({ addNote }) => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
    defaultValues: {
      category: categories.default.value,
      text: '',
    },
    mode: 'onChange',
  });

  const resetForm = () => {
    reset();
  };

  const submitForm = (data) => {
    addNote(data);
    resetForm();
  }

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          {...register('category')}
        >
          <CategoriesOptions />
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          {
            ...register('text', {
              required: { value: true, message: 'Text is required' },
              minLength: { value: 3, message: 'Text should be at least 3 characters' }
            })
          }
          placeholder="Enter note text"
          isInvalid={!!errors.text}
        />
        <Form.Control.Feedback type="invalid">
          {errors.text?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className={'text-end'}>
        <Button type={'submit'} disabled={!isValid}>Add note</Button>
      </Form.Group>
    </Form>
  );
};

export default AddNoteForm;
