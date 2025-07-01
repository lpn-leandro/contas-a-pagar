import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import FormButton from '../components/form/FormButton';
import FormInput from '../components/form/FormInput';

export default function registerUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const router = useRouter();

  return (
    <View className='self-center max-w-[100%] max-h-[100%] w-full h-full bg-white p-4'>
      <Text className='text-left font-semibold text-xl mb-4'>Novo usuário</Text>

      <FormInput
        placeholder='João da Silva'
        label='Nome:'
        value={name}
        onChangeText={setName}
      />

      <FormInput
        placeholder='example@example.com'
        label='E-mail:'
        value={email}
        onChangeText={setEmail}
      />

      <FormInput
        placeholder='Senha'
        label='Senha:'
        value={password}
        onChangeText={setPassword}
      />

      <FormInput
        placeholder='Confirme a sua Senha'
        label='Confirme a sua Senha:'
        value={passwordVerification}
        onChangeText={setPasswordVerification}
      />

      <View className='flex-1 justify-end mb-4'>
        <FormButton
          title='Criar'
          onPress={() => {
            if (
              name &&
              email &&
              password &&
              passwordVerification &&
              password === passwordVerification
            ) {
              console.log('Usuário registrado:', { name, email, password });
              router.replace('(auth)/(billsToPay)/home');
            } else {
              console.log('Inserir informações válidas');
            }
          }}
        />
      </View>
    </View>
  );
}
