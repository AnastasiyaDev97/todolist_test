import { FC } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import { ReturnComponentType } from 'types/ReturnComponentType';

type CustomCheckboxPropsType = {
  onCheckboxClick: () => void;
  isChecked: boolean;
  label: string;
};

export const CustomCheckbox: FC<CustomCheckboxPropsType> = ({
  onCheckboxClick,
  isChecked,
  label,
}): ReturnComponentType => {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{ pl: '16px' }}
        control={
          <Checkbox checked={isChecked} onChange={onCheckboxClick} color="primary" />
        }
        label={label}
      />
    </FormGroup>
  );
};
