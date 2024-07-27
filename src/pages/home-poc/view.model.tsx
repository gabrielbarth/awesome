import { useEffect, useState } from 'react';
import { HomeModelProps } from './model';
import { PageState } from '../../components/PageHandler';

export const useHomeViewModel = (): HomeModelProps => {
  const [state, setState] = useState<PageState>(PageState.loading);
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage('Hello from Async Operation!');
      setState(PageState.default);
    };

    fetchData();
  }, []);

  return {
    state,
    data: {
      title: 'oi exemplo',
      message,
    },
  };
};
