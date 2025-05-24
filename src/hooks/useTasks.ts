// src/hooks/useTasks.ts
import { v4 as uuidv4 } from 'uuid';
import type { ITask, TaskStatus } from 'types/tasks';
import { useLocalStorage } from './useLocalStorage';

/**
 * A hook that manages a list of tasks and persists them in localStorage.
 */

export function useTasks() {
  // Persist tasks to localStorage under the key "tasks"
  const [tasks, setTasks] = useLocalStorage<ITask[]>('tasks', []);

  const addTask = (data: Omit<ITask, 'id' | 'priority' | 'completed'>) => {
    const newTask: ITask = {
      ...data,
      id: uuidv4(),
      completed: false,
      priority: tasks.length + 1,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (updated: ITask) => {
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const changeTaskStatus = (id: string, status: TaskStatus)=> {
    setTasks(prev => 
      prev.map(t=>
        t.id == id ? { ...t, status} : t
      )
    )

  }
  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    changeTaskStatus
  };
}

