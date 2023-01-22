import Container from '@mui/material/Container';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import { Layout } from './components/Layout/Layout';

import { Header } from 'components/Header/Header';
import { Provider } from 'components/Provider/Provider';
import { Todolist } from 'components/Todolist/Todolist';
import { TodolistsData } from 'data/todolists';
import { theme } from 'theme';
import { ReturnComponentType } from 'types/ReturnComponentType';

const App = (): ReturnComponentType => {
  const todolists = TodolistsData();

  return (
    <ThemeProvider theme={theme}>
      <Provider value={todolists}>
        <Layout>
          <Container sx={{ p: '0 12px' }}>
            <>
              <Header />

              {Object.entries(todolists).map(todolist => {
                const todolistDate = todolist[0];
                const { tasks, isOpen } = todolist[1];

                return (
                  <Todolist
                    key={todolistDate}
                    tasks={tasks}
                    todolistDate={todolistDate}
                    isOpen={isOpen}
                  />
                );
              })}
            </>
          </Container>
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
