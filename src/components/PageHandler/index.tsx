import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export enum PageState {
  default = 'default',
  loading = 'loading',
  empty = 'empty',
  genericError = 'genericError',
  networkError = 'networkError',
}

interface PageHandlerProps {
  currentState: PageState | unknown;
  pageStates: {
    string: () => React.JSX.Element;
  };
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export const renderWithPageHandler = ({
  currentState,
  pageStates,
}: PageHandlerProps) => {
  const renderEmptyState = () => {
    return (
      <View style={styles.container}>
        <Text>EMPTY FROM PAGE HANDLER </Text>
      </View>
    );
  };

  const renderGenericErrorState = () => {
    return (
      <View style={styles.container}>
        <Text>GENERIC ERROR FROM PAGE HANDLER </Text>
      </View>
    );
  };

  const renderNetworkErrorState = () => {
    return (
      <View style={styles.container}>
        <Text>NETWORK ERROR FROM PAGE HANDLER </Text>
      </View>
    );
  };

  const renderLoadingState = () => {
    return (
      <View style={styles.container}>
        <Text>LOADING STATE FROM PAGE HANDLER </Text>
      </View>
    );
  };

  console.log('currentState', pageStates[currentState]);

  const renderUnknownState = () => {
    return pageStates[currentState];
  };

  switch (currentState) {
    case PageState.default:
      return pageStates[PageState.default];

    case PageState.loading:
      return pageStates[PageState.loading]
        ? pageStates[PageState.loading]
        : renderLoadingState();

    case PageState.empty:
      return pageStates[PageState.empty]
        ? pageStates['empty']
        : renderEmptyState();

    case PageState.genericError:
      return pageStates[PageState.genericError]
        ? pageStates[PageState.genericError]
        : renderGenericErrorState();

    case PageState.networkError:
      return pageStates[PageState.networkError]
        ? pageStates[PageState.networkError]
        : renderNetworkErrorState();

    default:
      return renderUnknownState();
  }
};
