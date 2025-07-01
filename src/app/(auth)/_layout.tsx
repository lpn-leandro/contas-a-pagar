import React from 'react';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='(billsToPay)'
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name='bookmark-outline' size={24} color='black' />
          ),
          title: 'Contas a pagar',
        }}
      />
      <Tabs.Screen
        name='billsPayed'
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name='bell-outline'
              size={24}
              color='black'
            />
          ),
          title: 'Contas pagas',
        }}
      />
    </Tabs>
  );
}
