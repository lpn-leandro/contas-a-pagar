import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import React from 'react';

type FormInputProps = {
  title: string;
} & TouchableOpacityProps;

export default function FormButton({ title, ...rest }: FormInputProps) {
  return (
    <TouchableOpacity
      className='mt-4 bg-[#0F172A] rounded-md h-[2.5rem] w-full max-h-[3.4rem]'
      {...rest}
    >
      <Text className='text-white m-auto text-base'>{title}</Text>
    </TouchableOpacity>
  );
}
