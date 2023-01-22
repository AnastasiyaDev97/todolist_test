import { FC, HTMLAttributes } from 'react';

import CardActions from '@mui/material/CardActions';

import { CardContainer, CardSide, Header } from './style';

import { TaskStatusType } from 'data/types';
import { ReturnComponentType } from 'types/ReturnComponentType';

interface CardPropsType extends HTMLAttributes<HTMLDivElement> {
  sideColor?: string;
  title: string;
  subtitle?: string;
  status?: TaskStatusType;
}

export const CustomCard: FC<CardPropsType> = ({
  sideColor,
  title,
  subtitle,
  children,
  status,
}): ReturnComponentType => {
  return (
    <CardContainer>
      {sideColor && <CardSide sideColor={sideColor} />}
      <Header
        title={title}
        subheader={subtitle}
        crossed={status === 'completed' ? 'true' : undefined}
      />
      {children && <CardActions sx={{ p: 0 }}>{children}</CardActions>}
    </CardContainer>
  );
};
