import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';

export const CardSide = styled('span')((props: { sideColor: string }) => ({
  display: 'block',
  width: '5px',
  height: '100%',
  borderRadius: '3px',
  position: 'absolute',
  top: '50%',
  left: '-19px',
  transform: 'translate(0%, -50%)',
  background: props.sideColor,
}));

export const CardContainer = styled(Card)({
  backgroundColor: 'inherit',
  overflow: 'visible',
  position: 'relative',
  width: '100%',
  boxShadow: 'none',
  color: 'inherit',
});

export const Header = styled(CardHeader)({
  padding: 0,
  '.MuiCardHeader-title': {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '28px',
    overflow: 'hidden',
  },
  '.MuiCardHeader-subheader': {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '17px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  '.MuiCardHeader-content': {
    width: '100%',
  },
});
