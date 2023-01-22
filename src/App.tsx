import Container from '@mui/material/Container';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import { Layout } from './components/Layout/Layout';

import { Header } from 'components/Header/Header';
import { Provider } from 'components/Provider/Provider';
import { Todolist } from 'components/Todolist/Todolist';
import { useGetTodolistsData } from 'hooks/useGetTodolistsData/useGetTodolistsData';
import { theme } from 'theme';
import { ReturnComponentType } from 'types/ReturnComponentType';

const App = (): ReturnComponentType => {
  const todolistDataStore = useGetTodolistsData();

  return (
    <ThemeProvider theme={theme}>
      <Provider value={todolistDataStore}>
        <Layout>
          <Container sx={{ p: '0 12px 12px 12px' }}>
            <>
              <Header />

              {Object.entries(todolistDataStore.todolists).map(todolist => {
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
