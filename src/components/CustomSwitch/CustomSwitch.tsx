import { FC } from 'react';

import { IOSSwitch } from './styles';

import { ReturnComponentType } from 'types/ReturnComponentType';

type CustomSwitchPropsType = {
  checked: boolean;
};

export const CustomSwitch: FC<CustomSwitchPropsType> = ({
  checked,
}): ReturnComponentType => {
  return <IOSSwitch sx={{ m: 1 }} checked={checked} />;
};
