import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useHomeViewModel } from './view.model';
import { renderWithPageHandler } from '../../components/PageHandler';
import { PageState } from '../../components/PageHandler';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

const HomeWithPageHandlerPoc = () => {
  const { state, data } = useHomeViewModel();

  const renderDefault = () => {
    return (
      <View style={styles.container}>
        <Text>oi este é um exemplo: default state</Text>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  };

  const renderOtherEmptyState = () => {
    return (
      <View style={styles.container}>
        <Text>oi este é um exemplo: other empty state </Text>
      </View>
    );
  };

  const renderUnknownState = () => {
    return (
      <View style={styles.container}>
        <Text>oi este é um exemplo: UNKNOWN STATE </Text>
      </View>
    );
  };

  return (
    <>
      {renderWithPageHandler({
        currentState: state,
        pageStates: {
          [PageState.default]: renderDefault(),
          [PageState.empty]: renderOtherEmptyState(),
          ['unknownState']: renderUnknownState(),
        },
      })}
    </>
  );
};

export { HomeWithPageHandlerPoc };
