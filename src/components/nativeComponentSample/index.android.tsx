import React from 'react';
import {
  View,
  StyleSheet,
  requireNativeComponent,
  NativeSyntheticEvent,
  ViewProps,
  // Alert,
} from 'react-native';

interface OnPressEvent {
  message: string;
}

interface MyComposeCardProps extends ViewProps {
  onPress?: (event: NativeSyntheticEvent<OnPressEvent>) => void;
}

const MyComposeCard =
  requireNativeComponent<MyComposeCardProps>('ComposeCardView');

export const MyNativeComponent = () => {
  const handlePress = (event: NativeSyntheticEvent<OnPressEvent>) => {
    // Alert.alert('Card Pressed - JS Event:', event.nativeEvent.message);
    console.log('Card Pressed - JS Event');
  };
  return (
    <View style={styles.container}>
      <MyComposeCard style={styles.card} onPress={handlePress} />
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
