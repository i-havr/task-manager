import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks } from 'redux/tasks/tasks-selectors';
import { TaskListStyled } from './TaskList.styled';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <TaskListStyled>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </TaskListStyled>
  );
};
