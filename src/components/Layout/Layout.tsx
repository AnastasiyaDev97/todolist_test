import { FC, HTMLAttributes } from 'react';

import Container from '@mui/material/Container';

import { ReturnComponentType } from 'types/ReturnComponentType';

interface LayoutPropsType extends HTMLAttributes<HTMLDivElement> {}

export const Layout: FC<LayoutPropsType> = ({ children }): ReturnComponentType => {
  return (
    <Container
      maxWidth="sm"
      sx={{ bgcolor: '#222222', p: '0 20px', borderRadius: '30px' }}
    >
      {children}
    </Container>
  );
};
