import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/tasks-operations';
import { FormStyled, InputStyled, ButtonStyled } from './TaskEditor.styled';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled name="text" />
      <ButtonStyled>Add task</ButtonStyled>
    </FormStyled>
  );
};
