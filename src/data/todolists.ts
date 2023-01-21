import { TodolistType } from './types';

import { getRandomInt, isEvenNumber } from 'utils';

const todolistsCount = 8;
const maxTasksCount = 4;

export const TodolistsData = (): TodolistType => {
  const todolists: TodolistType = {};

  for (let i = 0; i < todolistsCount; i++) {
    const currentFullDate = new Date();
    const currentDate = currentFullDate.getDate();
    const tasksCount = getRandomInt(1, maxTasksCount);

    currentFullDate.setDate(currentDate + i);

    todolists[`${currentFullDate}`] = [];

    for (let j = 0; j < tasksCount; j++) {
      const taskStatus = isEvenNumber(j + i) ? 'completed' : 'active';

      todolists[`${currentFullDate}`] = [
        ...todolists[`${currentFullDate}`],
        {
          id: `${i}${j}`,
          todolistId: `${currentFullDate}`,
          date: currentFullDate,
          status: taskStatus,
          name: 'Task name',
          description: 'Task description',
        },
      ];
    }
  }

  return todolists;
};
