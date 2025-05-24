import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { ITask } from 'types/tasks';
import EditTaskForm from 'components/forms/EditTaskForm/EditTaskForm';
import styles from './EditTaskPage.module.scss';

export interface EditTaskPageProps {
  tasks: ITask[];
  onUpdateTask: (task: ITask) => void;
}

const EditTaskPage: React.FC<EditTaskPageProps> = ({ tasks, onUpdateTask }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the task to edit
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return (
      <div className={styles.page}>
        <p className={styles.notFound}>Task not found.</p>
      </div>
    );
  }

  // When form submits, update to go home
  const handleUpdate = (updated: ITask) => {
    onUpdateTask(updated);
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.page}>
      <h2>Edit Task</h2>
      <EditTaskForm
        task={task}
        onUpdateTask={handleUpdate}
        onCancel={() => navigate('/', { replace: true })}
      />
    </div>
  );
};

export default EditTaskPage;
