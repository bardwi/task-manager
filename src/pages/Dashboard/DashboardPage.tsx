import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from 'components/tasks/TaskItem/TaskItem';
import type { ITask, TaskStatus } from 'types/tasks';
import styles from 'pages/Dashboard/DashboardPage.module.scss';

export interface DashboardPageProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onChangeStatus: (id: string, status: TaskStatus) => void;
}

const STATUS_ORDER: TaskStatus[] = ['todo', 'inProgress', 'done'];
const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: 'To Do',
  inProgress: 'In Progress',
  done: 'Done',
};

const DashboardPage: React.FC<DashboardPageProps> = ({
  tasks,
  onDeleteTask,
  onToggleComplete,
  onChangeStatus,
}) => {
  const navigate = useNavigate();

  // Group tasks by status
  const byStatus = (status: TaskStatus) =>
    tasks.filter((t) => t.status === status);

  // For a given status, which next statuses are valid
  const nextStatuses = (status: TaskStatus): TaskStatus[] => {
    const idx = STATUS_ORDER.indexOf(status);
    const result: TaskStatus[] = [];
    // Move forward
    if (idx < STATUS_ORDER.length - 1) {
      result.push(STATUS_ORDER[idx + 1]);
    }
    // Move backward
    if (idx > 0) {
      result.push(STATUS_ORDER[idx - 1]);
    }
    return result;
  };

  return (
    <div className={styles.board}>
      {STATUS_ORDER.map((status) => (
        <div key={status} className={`${styles.column} ${styles[status]}`}>
          <h3>{STATUS_LABELS[status]}</h3>
          <div className={styles.taskList}>
            {byStatus(status).map((task) => (
              <div key={task.id} className={styles.cardWrapper}>
                <TaskItem
                  task={task}
                  onEdit={() => navigate(`/edit/${task.id}`)}
                  onDelete={() => onDeleteTask(task.id)}
                  onToggleComplete={() => onToggleComplete(task.id)}
                />
                {/* status buttons */}
                <div className={styles.statusControls}>
                  {nextStatuses(task.status).map((next) => (
                    <button
                      key={next}
                      className={styles[`to${next}`]}
                      onClick={() => onChangeStatus(task.id, next)}
                    >
                      {`Move to ${STATUS_LABELS[next]}`}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
