import { FC } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CustomSwitch } from 'components/CustomSwitch/CustomSwitch';
import { TaskType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Task: FC<TaskType> = ({ name, description }): ReturnComponentType => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm>
        <Typography gutterBottom variant="subtitle1" component="div">
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
      </Grid>
      <Grid item>
        <CustomSwitch />
      </Grid>
    </Grid>
  );
};
