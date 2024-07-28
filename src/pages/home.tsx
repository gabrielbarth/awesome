import React from 'react';
import { ViewStyle, StyleProp, View } from 'react-native';
import { MyComponentWithNativeModule } from '../components/nativeModuleSample';

const Home = () => {
  const containerStyles: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={containerStyles}>
      <MyComponentWithNativeModule />
    </View>
  );
};

export { Home };
