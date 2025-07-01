import React from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='registerUser'
        options={{
          title: 'Novo usuário',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='(auth)'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
