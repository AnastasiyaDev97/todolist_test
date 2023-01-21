import Container from '@mui/material/Container';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import { Layout } from './components/Layout/Layout';

import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import { Header } from 'components/Header/Header';
import { Todolist } from 'components/Todolist/Todolist';
import { TodolistsData } from 'data/todolists';
import { theme } from 'theme';
import { ReturnComponentType } from 'types/ReturnComponentType';

const todolists = TodolistsData();

const App = (): ReturnComponentType => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container sx={{ p: '0 12px' }}>
          <>
            <Header />
            <CustomCheckbox />
            {Object.entries(todolists).map(todolist => {
              const todolistDate = todolist[0];
              const tasks = todolist[1];

              return (
                <Todolist key={todolistDate} tasks={tasks} todolistDate={todolistDate} />
              );
            })}
          </>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
