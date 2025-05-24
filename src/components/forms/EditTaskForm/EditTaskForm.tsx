import React, { useState } from 'react';
import { ITask } from 'types/tasks';
import styles from './TaskForm.module.scss';

export interface EditTaskFormProps {
  task: ITask;
  onUpdateTask: (task: ITask) => void;
  onCancel: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  task,
  onUpdateTask,
  onCancel,
}) => {
  // Normalize dueDate (string or Date) to YYYY-MM-DD
  const getInitialDate = () => {
    if (!task.dueDate) return '';
    const d =
      typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate;
    return d.toISOString().split('T')[0];
  };
  const [title, setTitle] = useState(task.title);
  const [category, setCategory] = useState(task.category);
  const [tags, setTags] = useState(task.tags.join(', '));
  const [dueDate, setDueDate] = useState(getInitialDate());
  const [description, setDescription] = useState(task.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ITask = {
      ...task,
      title,
      category,
      tags: tags ? tags.split(',').map((t) => t.trim()) : [],
      dueDate: dueDate ? new Date(dueDate) : undefined,
      description,
    };
    onUpdateTask(updated);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label>Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label>Category</label>
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label>Tags</label>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.actions}>
        <button type="submit" className="save">
          Update Task
        </button>
        <button type="button" className="cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTaskForm;
