import React, { useState } from 'react';
import { ITask, TaskStatus } from 'types/tasks';
import styles from './TaskForm.module.scss';

export interface AddTaskFormProps {
  onAddTask: (
    data: Omit<ITask, 'id' | 'priority' | 'completed'> & { status: TaskStatus }
  ) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask({
      title,
      category,
      tags: tags ? tags.split(',').map((t) => t.trim()) : [],
      dueDate: dueDate ? new Date(dueDate) : undefined,
      description,
      status: 'todo',
    });
    setTitle('');
    setCategory('');
    setTags('');
    setDueDate('');
    setDescription('');
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
        <label>Tags (comma separated)</label>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>
      <div>
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
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
