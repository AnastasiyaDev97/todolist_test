import { memo } from 'react';

import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

import styles from './Ticker.module.css';

import { Layout } from 'components/Layout';
import { ReturnComponentType } from 'types/ReturnComponentType';

type TickerPropsType = {
  text: string;
};

export const Ticker = memo(({ text }: TickerPropsType): ReturnComponentType => {
  return (
    <Layout>
      <Container sx={{ width: '100%', m: '0 auto', overflow: 'hidden' }}>
        <Typography className={styles.ticker}>{text}</Typography>
      </Container>
    </Layout>
  );
});
