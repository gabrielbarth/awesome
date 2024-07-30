import React from 'react';
import {
  View,
  StyleSheet,
  requireNativeComponent,
  ViewComponent,
} from 'react-native';

const MyComposeCard: typeof ViewComponent =
  requireNativeComponent('ComposeCardView');

export const MyNativeComponent = () => {
  return (
    <View style={styles.container}>
      <MyComposeCard style={styles.card} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  },
  card: {
    width: '90%',
    height: 100,
  },
});
