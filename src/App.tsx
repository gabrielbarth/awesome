import React, { ReactElement } from 'react';

import { Home } from './pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = (): ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export { App };
