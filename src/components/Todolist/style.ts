import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

export const TodolistCard = styled(Accordion)(() => ({
  backgroundColor: 'inherit',
  marginBottom: '32px',
  borderRadius: '40px',
  boxShadow:
    '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  color: 'inherit',
  padding: '16px 0',
  '&:before': { display: 'none' },
  '& .MuiAccordionSummary-root': { padding: '0 25px 0 0', minHeight: 0 },
  '& .MuiAccordionSummary-content': {
    margin: '0',
    overflow: 'hidden',
    padding: '0 8px 0 33px',
  },
  '& .MuiAccordionDetails-root': {
    padding: '0 8px 0 33px',
  },
}));
