import React, { ReactElement } from 'react';

// import { Home } from './pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomeWithPageHandlerPoc } from './pages/home-poc/view';

const App = (): ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeWithPageHandlerPoc />
    </QueryClientProvider>
  );
};

export { App };
