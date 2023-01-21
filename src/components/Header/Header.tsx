import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { HeaderToolbar } from './style';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Header = (): ReturnComponentType => {
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
          <IconButton color="inherit" aria-label="menu" sx={{ p: 0, m: 0 }}>
            <SettingsIcon />
          </IconButton>
        </HeaderToolbar>
      </AppBar>
    </Box>
  );
};
