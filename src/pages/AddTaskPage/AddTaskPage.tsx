import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddTaskForm from 'components/forms/AddTaskForm/AddTaskForm';
import { ITask } from 'types/tasks';
import styles from './AddTaskPage.module.scss';

export interface AddTaskPageProps {
  onAddTask: (data: Omit<ITask, 'id' | 'priority' | 'completed'>) => void;
}

const AddTaskPage: React.FC<AddTaskPageProps> = ({ onAddTask }) => {
  const navigate = useNavigate();

  const handleAdd = (data: Omit<ITask, 'id' | 'priority' | 'completed'>) => {
    onAddTask(data);
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.page}>
      <h2>Add New Task</h2>
      <AddTaskForm onAddTask={handleAdd} />
    </div>
  );
};

export default AddTaskPage;
