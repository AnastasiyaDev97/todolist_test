import { FC } from 'react';

import { CustomCard } from 'components/CustomCard/CustomCard';
import { CustomSwitch } from 'components/CustomSwitch/CustomSwitch';
import { TaskType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Task: FC<TaskType> = ({
  name,
  description,
  sideColor,
  status,
}): ReturnComponentType => {
  return (
    <CustomCard title={name} subtitle={description} sideColor={sideColor} status={status}>
      <CustomSwitch checked={status === 'completed'} />
    </CustomCard>
  );
};
