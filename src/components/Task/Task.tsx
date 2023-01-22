import { FC, useContext } from 'react';

import { CustomCard } from 'components/CustomCard/CustomCard';
import { CustomSwitch } from 'components/CustomSwitch/CustomSwitch';
import { StoreContext } from 'components/Provider/Provider';
import { TaskType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Task: FC<TaskType> = ({
  name,
  description,
  sideColor,
  status,
  todolistId,
  id,
}): ReturnComponentType => {
  const todolistData = useContext(StoreContext);

  const onToggleStatusSwitchChange = (): void => {
    if (todolistData) {
      todolistData.methods.onToggleTaskStatusChange(
        status === 'completed' ? 'active' : 'completed',
        todolistId,
        id,
      );
    }
  };

  return (
    <CustomCard title={name} subtitle={description} sideColor={sideColor} status={status}>
      <CustomSwitch
        checked={status === 'completed'}
        onChange={onToggleStatusSwitchChange}
      />
    </CustomCard>
  );
};
