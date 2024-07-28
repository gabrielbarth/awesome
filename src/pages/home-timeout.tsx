import React from 'react';
import { useQuery } from 'react-query';
import {
  View,
  Text,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from 'react-native';

const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeout: number = 0,
): Promise<any | null> => {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      resolve(null); // Resolve with null on timeout
    }, timeout);

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        clearTimeout(timer);
        resolve(data);
      })
      .catch(() => {
        clearTimeout(timer);
        resolve(null); // Resolve with null on error
      });
  });
};

const Home = () => {
  const REQUEST_TIMEOUT = 0;

  const { data, error, isLoading } = useQuery('fetchData', () =>
    fetchWithTimeout(
      'http://localhost:3000/data',
      { method: 'GET' },
      REQUEST_TIMEOUT,
    ),
  );

  const containerStyles: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  if (isLoading) {
    return (
      <View style={containerStyles}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={containerStyles}>
        <Text>Error occurred</Text>
      </View>
    );
  }

  if (data === null) {
    return (
      <View style={containerStyles}>
        <Text>Request timed out or failed</Text>
      </View>
    );
  }

  return (
    <View style={containerStyles}>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export { Home };
