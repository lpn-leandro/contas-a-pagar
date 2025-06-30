import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='(billsToPay)'
        options={{
          headerShown: false,
          //tabBarIcon: 'home',
          title: 'Contas a pagar',
        }}
      />
      <Tabs.Screen
        name='(billsPayed)'
        options={{
          headerShown: false,
          //tabBarIcon: 'plus',
          title: 'Contas pagas',
        }}
      />
    </Tabs>
  );
}
