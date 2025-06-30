import React from 'react';
import { Slot, Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name='home'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='detail'
        options={{
          title: 'Novo usuário',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
