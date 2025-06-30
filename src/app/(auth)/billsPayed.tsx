import { View } from 'react-native';
import React from 'react';
import Scrollable from '../../components/containers/Scrollable';
import HeaderWithHamburguer from '../../components/headers/HeaderWithHamburguer';
import BillList from '../../components/list/BillList';
import FormButton from '../../components/form/FormButton';
import { router } from 'expo-router';

export default function home() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Home'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />
      <BillList />
    </Scrollable>
  );
}
