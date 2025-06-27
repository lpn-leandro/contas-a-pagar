import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

type FormInput = {
  label?: string;
} & TextInputProps;

export default function FormInput({ label, ...rest }: FormInput) {
  return (
    <>
      <Text className='text-base mb-1 strong'>{label}</Text>
      <View className='mb-3  border-slate-300 border rounded-lg max-w-full max-h-full h-13'>
        <TextInput {...rest} />
      </View>
    </>
  );
}
