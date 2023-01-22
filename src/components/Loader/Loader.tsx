import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Loader = (): ReturnComponentType => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
