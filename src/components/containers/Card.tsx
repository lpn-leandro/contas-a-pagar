import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';

export default function Card({ children }: PropsWithChildren) {
  return (
    <View className='max-w-[90%] p-6 w-full rounded-3xl h-[90%]'>
      {children}
    </View>
  );
}
