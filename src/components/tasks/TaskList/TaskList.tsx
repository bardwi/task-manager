import React, { useState } from 'react';
import { ITask } from 'types/tasks';
import AddTaskForm from '../../forms/AddTaskForm/AddTaskForm';
import EditTaskForm from '../../forms/EditTaskForm/EditTaskForm';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.scss';

export interface TaskListProps {
  tasks: ITask[];
  onAddTask: (data: Omit<ITask, 'id' | 'priority' | 'completed'>) => void;
  onDeleteTask: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onUpdateTask: (task: ITask) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onAddTask,
  onDeleteTask,
  onToggleComplete,
  onUpdateTask,
}) => {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const editingTask = editingTaskId
    ? tasks.find((t) => t.id === editingTaskId) || null
    : null;

  return (
    <div className={styles.list}>
      <AddTaskForm onAddTask={onAddTask} />

      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onUpdateTask={(updated) => {
            onUpdateTask(updated);
            setEditingTaskId(null);
          }}
          onCancel={() => setEditingTaskId(null)}
        />
      )}

      <h2>Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={() => setEditingTaskId(task.id)}
            onDelete={() => onDeleteTask(task.id)}
            onToggleComplete={() => onToggleComplete(task.id)}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
