import { memo, forwardRef, SyntheticEvent, useState } from 'react';

// eslint-disable-next-line import/named
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { ReturnComponentType } from 'types/ReturnComponentType';

type ErrorSnackbarPropstype = {
  isError: boolean;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackbar = memo(
  ({ isError }: ErrorSnackbarPropstype): ReturnComponentType => {
    const [open, setOpen] = useState(isError);

    const handleClose = (event?: SyntheticEvent | Event, reason?: string): void => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Error message 😠
        </Alert>
      </Snackbar>
    );
  },
);
