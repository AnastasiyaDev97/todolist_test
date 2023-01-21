/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { TodolistCard } from './style';

import { CustomCard } from 'components/CustomCard/CustomCard';
import { TaskType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

type TodolistPropsType = {
  tasks: TaskType[];
  todolistDate: string;
};

export const Todolist: FC<TodolistPropsType> = ({
  tasks,
  todolistDate,
}): ReturnComponentType => {
  const formattedDate = (): string => {
    const options = { day: 'numeric', month: 'numeric' } as const;
    const currentDate = new Date().toLocaleDateString('en-GB', options);
    const todolistFormattedDate = new Date(todolistDate).toLocaleDateString(
      'en-GB',
      options,
    );
    const currentDateDay = new Date().getDate();
    const todolistDateDay = new Date(todolistDate).getDate();

    if (currentDate === todolistFormattedDate) {
      return 'Today';
    }
    if (todolistDateDay - currentDateDay === 1) {
      return 'Tomorrow';
    }

    return todolistFormattedDate;
  };

  return (
    <TodolistCard>
      <AccordionSummary
        expandIcon={<ExpandCircleDownRoundedIcon color="primary" />}
        /*  aria-controls="panel1a-content"
        id="panel1a-header" */
      >
        <CustomCard
          sideColor="#A9A9A9"
          title={`${formattedDate()} Tasks`}
          subtitle="dgdf dfgdf dgdfg dfjhkh jhhjkhk khjkhkjk kjhjhjkh jhjgkjgkj"
        />
      </AccordionSummary>
      <AccordionDetails></AccordionDetails>
    </TodolistCard>
  );
};
