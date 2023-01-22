import { FC } from 'react';

import { IOSSwitch } from './styles';

import { ReturnComponentType } from 'types/ReturnComponentType';

type CustomSwitchPropsType = {
  checked: boolean;
  onChange: () => void;
};

export const CustomSwitch: FC<CustomSwitchPropsType> = ({
  checked,
  onChange,
}): ReturnComponentType => {
  return <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={onChange} />;
};
