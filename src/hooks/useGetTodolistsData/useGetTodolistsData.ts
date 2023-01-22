import { useCallback, useState } from 'react';

import { TodolistsData } from 'data/todolists';
import { TaskStatusType, TodolistType } from 'data/types';

export type TodolistStoreDataType = {
  todolists: TodolistType;
  methods: {
    onToggleTaskStatusChange: (
      status: TaskStatusType,
      todolistId: string,
      id: string,
    ) => void;
    onEditTodolistModeClick: (todolistId: string, isOpen: boolean) => void;
  };
};

export const useGetTodolistsData = (): TodolistStoreDataType => {
  const [todolists, setTodolists] = useState(TodolistsData());

  const onToggleTaskStatusChange = useCallback(
    (status: TaskStatusType, todolistId: string, id: string): void => {
      const updatedTodo = {
        ...todolists,
        [todolistId]: {
          ...todolists[todolistId],
          tasks: todolists[todolistId].tasks.map(task =>
            task.id === id ? { ...task, status: status } : task,
          ),
        },
      };

      setTodolists(updatedTodo);
    },
    [todolists],
  );

  const onEditTodolistModeClick = useCallback(
    (todolistId: string, isOpen: boolean): void => {
      const updatedTodo = {
        ...todolists,
        [todolistId]: { ...todolists[todolistId], isOpen: isOpen },
      };

      setTodolists(updatedTodo);
    },
    [todolists],
  );

  return {
    todolists,
    methods: { onToggleTaskStatusChange, onEditTodolistModeClick },
  };
};
