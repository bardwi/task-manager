const TASK_KEY = 'tasks';

export const loadTasksFromStorage = (): string | null => {
    return localStorage.getItem(TASK_KEY);
};

export const saveTasksToStorage = (tasksJson: string): void => {
    localStorage.setItem(TASK_KEY, tasksJson);
}