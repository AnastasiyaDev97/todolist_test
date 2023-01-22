import { FC, Fragment, useContext } from 'react';

import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { TodolistCard } from './style';

import { CustomCard } from 'components/CustomCard/CustomCard';
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import { StoreContext } from 'components/Provider/Provider';
import { Task } from 'components/Task/Task';
import { TaskType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

type TodolistPropsType = {
  tasks: TaskType[];
  todolistDate: string;
  isOpen: boolean;
};

export const Todolist: FC<TodolistPropsType> = ({
  tasks,
  todolistDate,
  isOpen,
}): ReturnComponentType => {
  const todolistData = useContext(StoreContext);

  const onToggleShowModeClick = (): void => {
    if (todolistData) {
      todolistData.methods.onEditTodolistModeClick(todolistDate, !isOpen);
    }
  };

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
    <Fragment>
      {isOpen && (
        <CustomCheckbox
          onCheckboxClick={onToggleShowModeClick}
          isChecked={isOpen}
          label={`${formattedDate()} Tasks`}
        />
      )}
      <TodolistCard expanded={isOpen}>
        {!isOpen && (
          <AccordionSummary
            onClick={onToggleShowModeClick}
            expandIcon={<ExpandCircleDownRoundedIcon color="primary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <CustomCard sideColor="#A9A9A9" title={`${formattedDate()} Tasks`} />
          </AccordionSummary>
        )}
        <AccordionDetails>
          {tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </AccordionDetails>
      </TodolistCard>
    </Fragment>
  );
};
