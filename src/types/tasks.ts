export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface ITask {
    id: string;
    title: string;
    description?: string;
    category: string;
    tags: string[];
    dueDate?: Date;
    priority: number;
    completed:boolean;
    status: TaskStatus;
}