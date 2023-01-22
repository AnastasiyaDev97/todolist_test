import { ChangeEvent, memo } from 'react';

import FormGroup from '@mui/material/FormGroup';

import { IOSSwitch, SwitchLabel } from './styles';

import { ReturnComponentType } from 'types/ReturnComponentType';

type CustomSwitchPropsType = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export const CustomSwitch = memo(
  ({ checked, onChange, label }: CustomSwitchPropsType): ReturnComponentType => {
    return (
      <FormGroup sx={{ flexDirection: 'row' }}>
        {label && <SwitchLabel>{label}</SwitchLabel>}
        <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={onChange} />
      </FormGroup>
    );
  },
);
