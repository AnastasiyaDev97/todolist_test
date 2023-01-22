export type TaskType = {
  id: string;
  todolistId: string;
  date: Date;
  status: TaskStatusType;
  name: string;
  description: string;
  sideColor: string;
};

export type TodolistType = {
  [key: string]: {
    tasks: TaskType[];
    isOpen: boolean;
  };
};

export type TaskStatusType = 'completed' | 'active';
