import React from 'react';
import { ITask } from 'types/tasks';
import { isOverdue, formatDate } from 'utils/dateUtils';
import styles from './TaskItem.module.scss';

export interface TaskItemProps {
  task: ITask;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  const overdue = isOverdue(task.dueDate);

  return (
    <div className={`${styles.item} ${overdue ? styles.overdue : ''}`}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete}
        />
        <div className={styles.details}>
          <strong className={task.completed ? styles.completed : ''}>
            {task.title}
          </strong>{' '}
          <span className={styles.category}>— {task.category}</span>
          <br />
          {task.dueDate && (
            <span className={styles.due}>Due: {formatDate(task.dueDate)}</span>
          )}
          {task.tags.length > 0 && (
            <div className={styles.tags}>
              {task.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          {task.description && (
            <p className={styles.description}>{task.description}</p>
          )}
        </div>
      </div>
      <div>
        <button onClick={onEdit} className="edit">
          Edit
        </button>
        <button onClick={onDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
