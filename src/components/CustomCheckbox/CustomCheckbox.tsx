import { ChangeEvent, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const CustomCheckbox = (): ReturnComponentType => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} color="primary" />}
        label="Today Tasks:"
      />
    </FormGroup>
  );
};
