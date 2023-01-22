import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';

export const CustomSettings = styled(Menu)({
  '.MuiPaper-root': {
    backgroundColor: '#282828',
    boxShadow:
      '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    borderRadius: '25px',
  },
});
