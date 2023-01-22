/* eslint-disable no-magic-numbers */
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import activeStatusIcon from '../../assets/icons/activeTask.svg';
import completedStatusIcon from '../../assets/icons/completedTask.svg';

export const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '.MuiSwitch-thumb:before': {
    content: '""',
    position: 'absolute',
    width: '14px',
    height: '14px',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: 'translate(-50%, -50%)',
    backgroundImage: `url(${activeStatusIcon})`,
    backgroundSize: 'contain',
  },
  '& .Mui-checked .MuiSwitch-thumb:before': {
    backgroundImage: `url(${completedStatusIcon})`,
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#10C200',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },

  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#366EFF' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const SwitchLabel = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
