import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/tasks-operations';
import { TaskStyled, TextStyled, ButtonStyled } from './Task.styled';

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <TaskStyled>
      <TextStyled>{text}</TextStyled>
      <ButtonStyled type="button" onClick={handleDelete}>
        Delete
      </ButtonStyled>
    </TaskStyled>
  );
};
