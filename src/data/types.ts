export type TaskType = {
  id: string;
  todolistId: string;
  date: Date;
  status: 'completed' | 'active';
  name: string;
  description: string;
};

export type TodolistType = {
  [key: string]: TaskType[];
};
