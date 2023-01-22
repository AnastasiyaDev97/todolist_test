import { memo } from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { HeaderToolbar } from './style';

import { Settings } from 'components/Settings';
import { ReturnComponentType } from 'types/ReturnComponentType';

type HeaderPropsType = {
  onSwitchChange: (newsMode: boolean) => void;
  isChecked: boolean;
};

export const Header = memo(
  ({ onSwitchChange, isChecked }: HeaderPropsType): ReturnComponentType => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="inherit"
          sx={{ background: 'inherit', boxShadow: 'none' }}
        >
          <HeaderToolbar>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              To Do
            </Typography>
            <Settings onSwitchChange={onSwitchChange} isChecked={isChecked}>
              <IconButton color="inherit" aria-label="menu" sx={{ p: 0, m: 0 }}>
                <SettingsIcon />
              </IconButton>
            </Settings>
          </HeaderToolbar>
        </AppBar>
      </Box>
    );
  },
);
