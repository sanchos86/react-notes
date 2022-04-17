import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import CategoriesOptions from '@/components/AddNoteForm/CategoriesOptions';

const NotesTableRowInUpdateMode = ({
  index,
  note,
  updateNote,
  setUpdateMode,
  toggleNoteCompletedState,
}) => {
  const { register, handleSubmit, formState: { isValid, errors }, reset } = useForm({
    defaultValues: {
      category: note.category,
      text: note.text,
    },
    mode: 'onChange',
  });

  const submitForm = (data) => {
    updateNote({
      ...data,
      id: note.id,
    });
    cancelUpdateMode();
  };

  const cancelUpdateMode = () => {
    reset();
    setUpdateMode(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Form.Check
          checked={note.completed}
          type={'checkbox'}
          label={note.completed ? 'Restore' : 'Complete'}
          id={`notes-table-${note.id}`}
          onChange={() => toggleNoteCompletedState(note.id)}
        />
      </td>
      <td>
        <Form.Control
          {...register('text', {
            required: { value: true, message: 'Text is required' },
            minLength: { value: 3, message: 'Text should be at least 3 characters' }
          })}
          placeholder="Enter note text"
          isInvalid={!!errors.text}
        />
        <Form.Control.Feedback type="invalid">
          {errors.text?.message}
        </Form.Control.Feedback>
      </td>
      <td>
        <Form.Select {...register('category')}>
          <CategoriesOptions />
        </Form.Select>
      </td>
      <td>
        <Button
          variant={'secondary'}
          size={'sm'}
          className={'me-2'}
          onClick={cancelUpdateMode}
        >
          <FontAwesomeIcon icon={faXmark} className={'me-1'} />Cancel
        </Button>
        <Button
          variant={'success'}
          size={'sm'}
          disabled={!isValid}
          onClick={handleSubmit(submitForm)}
        >
          <FontAwesomeIcon icon={faCheck} className={'me-1'} />Update
        </Button>
      </td>
    </tr>
  );
};

export default NotesTableRowInUpdateMode;
