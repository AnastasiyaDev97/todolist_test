import { FC, HTMLAttributes } from 'react';

import CardActions from '@mui/material/CardActions';

import { CardContainer, CardSide, Header } from './style';

import { ReturnComponentType } from 'types/ReturnComponentType';

interface CardPropsType extends HTMLAttributes<HTMLDivElement> {
  sideColor?: string;
  title: string;
  subtitle?: string;
}

export const CustomCard: FC<CardPropsType> = ({
  sideColor,
  title,
  subtitle,
  children,
}): ReturnComponentType => {
  return (
    <CardContainer /* sx={{ minWidth: 350 }} */>
      {sideColor && <CardSide sideColor={sideColor} />}
      <Header title={title} subheader={subtitle} />

      {children && <CardActions>{children}</CardActions>}
    </CardContainer>
  );
};
