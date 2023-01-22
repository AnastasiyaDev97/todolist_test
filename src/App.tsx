import { useState, useCallback } from 'react';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useQuery } from 'react-query';

import { newsAPI } from './api/news';
import { Layout } from './components/Layout';

import { ErrorSnackbar } from 'components/ErrorSnackbar';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import { Provider } from 'components/Provider';
import { Ticker } from 'components/Ticker';
import { Todolist } from 'components/Todolist';
import { useGetTodolistsData } from 'hooks/useGetTodolistsData';
import { theme } from 'theme';
import { ReturnComponentType } from 'types/ReturnComponentType';

const App = (): ReturnComponentType => {
  const todolistDataStore = useGetTodolistsData();

  const [isNewsShown, setIsNewsShown] = useState(false);

  const {
    isLoading,
    isError,
    data: news,
    refetch,
  } = useQuery('news', newsAPI.getNews, {
    enabled: false,
  });

  const onShowNewsSwitchChange = useCallback((newsMode: boolean) => {
    if (newsMode) {
      refetch();
    }
    setIsNewsShown(newsMode);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider value={todolistDataStore}>
        <Layout>
          <>
            <Header onSwitchChange={onShowNewsSwitchChange} isChecked={isNewsShown} />

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
            {isError && <ErrorSnackbar isError={isError} />}
          </>
        </Layout>
        {isNewsShown && (
          <Ticker text={news?.[0]?.content || news?.[0]?.description || 'News'} />
        )}
      </Provider>
    </ThemeProvider>
  );
};

export default App;
