import { Pressable } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { AntDesign } from '@expo/vector-icons';

type HeaderWithHamburguerProps = {
  title: string;
  optionsProps: string[];
  destructiveButtonIndex?: number;
  cancelButtonIndex: number;
};

export default function HeaderWithHamburguer({
  title,
  optionsProps,
  destructiveButtonIndex,
  cancelButtonIndex,
}: HeaderWithHamburguerProps) {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = (title: string) => {
    showActionSheetWithOptions(
      {
        options: optionsProps,
        destructiveButtonIndex: destructiveButtonIndex,
        cancelButtonIndex: cancelButtonIndex,
      },
      (pressedId) => {
        console.log(pressedId, title);
        switch (pressedId) {
          case 0:
            if (title == 'Home') {
              router.push('/about');
            } else {
              router.back();
            }
            break;
          case 1:
            router.navigate('/');
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title,
        headerRight: () => (
          <Pressable className='mr-2' onPress={() => handlePress(title)}>
            <AntDesign name='user' size={25} color='black'></AntDesign>
          </Pressable>
        ),
      }}
    />
  );
}
