import { Text } from 'react-native';
import React from 'react';
import Scrollable from '../components/containers/Scrollable';
import HeaderWithHamburguer from '../components/headers/HeaderWithHamburguer';
import FormButton from '../components/form/FormButton';

export default function home() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Home'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />
      <Text className='text-left font-bold text-xl'> Contas a Pagar </Text>
      <FormButton title='Login' />
    </Scrollable>
  );
}
