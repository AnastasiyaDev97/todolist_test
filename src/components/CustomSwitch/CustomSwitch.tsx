import { IOSSwitch } from './styles';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const CustomSwitch = (): ReturnComponentType => {
  return <IOSSwitch sx={{ m: 1 }} defaultChecked />;
};
