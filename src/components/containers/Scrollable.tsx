import { View, ScrollView } from 'react-native';
import React, { ReactNode } from 'react';
import { Stack } from 'expo-router';

type FullScreenProps = {
  children: ReactNode;
};

export default function Scrollable({ children }: FullScreenProps) {
  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen options={{ headerShown: false }} />

      {/* <ScrollView>{children}</ScrollView> */}
      <View>{children}</View>
    </View>
  );
}
