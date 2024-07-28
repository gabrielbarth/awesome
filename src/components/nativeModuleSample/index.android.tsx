import React, { useEffect } from 'react';
import { View, Text, Button, NativeModules } from 'react-native';

const { MyNativeModule } = NativeModules;

const nativeModuleMethod = async (param: string) => {
  try {
    const result = await MyNativeModule.sampleMethod(param);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

export const MyComponentWithNativeModule = () => {
  useEffect(() => {
    const testNativeModule = async () => {
      const result = await nativeModuleMethod('Hello from React Native');
      console.log(result);
    };

    testNativeModule();
  }, []);

  return (
    <View>
      <Text>React Native with Kotlin</Text>
      <Button
        title="Call Native Module"
        onPress={() => nativeModuleMethod('Button Pressed')}
      />
    </View>
  );
};
