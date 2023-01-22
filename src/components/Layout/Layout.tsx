import { memo, HTMLAttributes } from 'react';

import Container from '@mui/material/Container';

import { ReturnComponentType } from 'types/ReturnComponentType';

interface LayoutPropsType extends HTMLAttributes<HTMLDivElement> {}

export const Layout = memo(({ children }: LayoutPropsType): ReturnComponentType => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: '#222222',
        borderRadius: '30px',
        mb: '25px',
        p: '0 12px 12px 12px',
      }}
    >
      {children}
    </Container>
  );
});
