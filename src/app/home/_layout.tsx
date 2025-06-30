import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Início',
            headerShown: false,
            //tabBarIcon: 'home',
          }}
        />
      </Tabs>
    </ActionSheetProvider>
  );
}
