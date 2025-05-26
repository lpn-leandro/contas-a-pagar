import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import React from 'react';

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity
      className='mt-4 bg-[#0F172A] rounded-md p-4 w-full max-h-[50px]'
      {...rest}
    >
      <Text className='text-white m-auto text-base'>{title}</Text>
    </TouchableOpacity>
  );
}
