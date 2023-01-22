import { memo, useContext, useCallback } from 'react';

import { CustomCard } from 'components/CustomCard';
import { CustomSwitch } from 'components/CustomSwitch';
import { StoreContext } from 'components/Provider';
import { TaskType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Task = memo(
  ({
    name,
    description,
    sideColor,
    status,
    todolistId,
    id,
  }: TaskType): ReturnComponentType => {
    const todolistData = useContext(StoreContext);

    const onToggleStatusSwitchChange = useCallback((): void => {
      if (todolistData) {
        todolistData.methods.onToggleTaskStatusChange(
          status === 'completed' ? 'active' : 'completed',
          todolistId,
          id,
        );
      }
    }, [id, status, todolistId, todolistData]);

    return (
      <CustomCard
        title={name}
        subtitle={description}
        sideColor={sideColor}
        status={status}
      >
        <CustomSwitch
          checked={status === 'completed'}
          onChange={onToggleStatusSwitchChange}
        />
      </CustomCard>
    );
  },
);
